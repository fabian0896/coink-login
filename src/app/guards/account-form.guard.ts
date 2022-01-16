import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../core/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AccountFormGuard implements CanActivate {

  constructor(
    private accountService: AccountService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const phone = this.accountService.getPhone();
      const allowed = phone.verified && Boolean(phone.value);
      if (!allowed) {
        this.router.navigateByUrl('/phone-number');
        return false;
      }
      return true;
  }

}
