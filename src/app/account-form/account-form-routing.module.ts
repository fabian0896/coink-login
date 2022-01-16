import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountFormGuard } from '../guards/account-form.guard';

import { AccountFormPage } from './account-form.page';

const routes: Routes = [
  {
    path: '',
    component: AccountFormPage,
    canActivate: [AccountFormGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcountFormPageRoutingModule {}
