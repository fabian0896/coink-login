import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneNumberPageRoutingModule } from './phone-number-routing.module';

import { PhoneNumberPage } from './phone-number.page';
import { SharedModule } from '../shared/shared.module';
import { CodeVerificationPage } from './pages/code-verification/code-verification.page';
import { PhoneFormPage } from './pages/phone-form/phone-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PhoneNumberPageRoutingModule
  ],
  declarations: [
    PhoneNumberPage,
    CodeVerificationPage,
    PhoneFormPage,
  ]
})
export class PhoneNumberPageModule {}
