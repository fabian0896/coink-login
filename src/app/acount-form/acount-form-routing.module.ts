import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcountFormPage } from './acount-form.page';

const routes: Routes = [
  {
    path: '',
    component: AcountFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcountFormPageRoutingModule {}
