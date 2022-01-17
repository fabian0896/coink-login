import { Component, OnInit } from '@angular/core';
import { AccountService } from '../core/services/account.service';
import { Account } from '../models/account.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {
  account: Account;
  flatAccount: [string, any][];
  phone = [];
  data = [];

  constructor(
    private accountService: AccountService,
  ) {
    this.account = this.accountService.getAccount();
    this.flatAccount = Object.entries(this.flatObject(this.account));
  }

  flatObject(object: {[key: string]: any}) {
    let res: {[key: string]: any} = {};
    Object.keys(object).forEach((key) => {
      if (typeof object[key] === 'object') {
        const obj = this.flatObject(object[key]);
        res = {...res, ...obj};
      } else {
        res[key] = object[key];
      }
    });
    return res;
  }

  ngOnInit() {
  }

}
