import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-num-pad',
  templateUrl: './num-pad.component.html',
  styleUrls: ['./num-pad.component.scss'],
})
export class NumPadComponent implements OnInit {
  @Output() valueChange = new EventEmitter<string>();
  @Output() confirm = new EventEmitter<string>();

  @Input() maxLen = 10;

  numbers: (number | string)[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['DEL', 0, 'OK'],
  ];

  value = '';

  constructor() {}

  ngOnInit() {}

  onChange(v: number | 'OK' | 'DEL') {
    if (v === 'DEL' && v.length > 0) {
      this.value = this.value.substring(0, this.value.length - 1);
    } else if (v === 'OK') {
      this.confirm.emit(this.value);
      this.value = '';
    } else if (this.value.length < this.maxLen) {
      this.value += String(v);
    }
    this.valueChange.emit(this.value);
  }

}
