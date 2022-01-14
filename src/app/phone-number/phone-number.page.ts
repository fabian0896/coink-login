import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.page.html',
  styleUrls: ['./phone-number.page.scss'],
})
export class PhoneNumberPage implements OnInit {
  value = '';
  constructor() { }

  ngOnInit() {
  }

  onChange(value: string) {
    this.value = value;
  }

}
