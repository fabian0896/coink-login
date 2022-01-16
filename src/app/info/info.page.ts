import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AccountService } from '../core/services/account.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  checkTerms: FormControl;
  success = false;

  constructor(
    private accountService: AccountService,
  ) {
    this.checkTerms = new FormControl(false, [Validators.requiredTrue]);
  }

  onAcept() {
    if (this.checkTerms.valid) {
      this.accountService.setAcceptTermsAndConditions(true);
      this.success = true;
      const account = this.accountService.getAccount();
      console.log(account);
    }
  }

  ngOnInit() {
  }

}
