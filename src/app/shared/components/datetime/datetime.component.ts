import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { format, parseISO } from 'date-fns';


export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatetimeComponent),
  multi: true
};



@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class DatetimeComponent implements OnInit, ControlValueAccessor {
  @Input() label = '';
  @Input() formControlName = '';
  @Input() error = false;
  @Output() dateChange = new EventEmitter<string>();
  openModal = false;
  disable = false;
  date = '';

  private onTouchedCallback: () => void;
  private onChangeCallback: (_: any) => void;

  constructor() { }


  writeValue(value: any): void {
    if (value !== this.date) {
      this.date = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  onBlur() {
    this.onTouchedCallback();
  }

  ngOnInit() {}

  formatDate(date: string) {
    return format(parseISO(date), 'dd/MM/yyyy');
  }

  open() {
    this.openModal = true;
  }

  toggleModal() {
    this.openModal = !this.openModal;
  }

  closeModal() {
    this.openModal = false;
  }

  onChangeDate(value: string) {
    this.date = this.formatDate(value);
    this.dateChange.emit(this.date);
    this.onChangeCallback(value);
  }

}
