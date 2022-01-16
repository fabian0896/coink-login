import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../core/services/account.service';

@Injectable({
  providedIn: 'root'
})
export class InfoGuard implements CanActivate {

  constructor(
    private accountService: AccountService,
    private router: Router,
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const data = this.accountService.getData();
      if (!data) {
        this.router.navigateByUrl('/account-form');
        return false;
      }
      return true;
  }

}
