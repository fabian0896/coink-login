import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss'],
})
export class ErrorModalComponent implements OnInit {
  @Input() openModal: boolean;
  @Output() closeModal = new EventEmitter<void>();
  @Output() actionClick = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {}

  onClose() {
    this.closeModal.emit();
  }

  onActionClick() {
    this.actionClick.emit();
  }

}
