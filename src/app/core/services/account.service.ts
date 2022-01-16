import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account, AccountData } from 'src/app/models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private account: Account = {
    phone: {
      verified: false,
      value: '',
    },
    data: undefined,
    acceptTermsAndConditions: false,
  };

  constructor() {
  }

  setPhone(phone: string) {
    this.account.phone.value = phone;
  }

  setPhoneVerified(verified = true) {
    this.account.phone.verified = verified;
  }

  getPhone() {
    return this.account.phone;
  }

  setData(data: AccountData) {
    this.account.data = data;
  }

  getData() {
    return this.account.data;
  }

  setAcceptTermsAndConditions(accept: boolean) {
    this.account.acceptTermsAndConditions = accept;
  }

  getAccount() {
    return this.account;
  }
}
