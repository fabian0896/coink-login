import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeVerificationPage } from './pages/code-verification/code-verification.page';
import { PhoneFormPage } from './pages/phone-form/phone-form.page';

import { PhoneNumberPage } from './phone-number.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneNumberPage,
    children: [
      {
        path: '',
        component: PhoneFormPage,
      },
      {
        path: 'code',
        component: CodeVerificationPage,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneNumberPageRoutingModule {}
