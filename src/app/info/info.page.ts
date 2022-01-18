import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router,
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

  onClose() {
    this.router.navigateByUrl('/resume');
  }

  ngOnInit() {
  }

}
