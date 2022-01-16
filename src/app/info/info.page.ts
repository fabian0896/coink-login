import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  checkTerms: FormControl;

  constructor() {
    this.checkTerms = new FormControl(false, [Validators.requiredTrue]);
  }

  ngOnInit() {
  }

}
