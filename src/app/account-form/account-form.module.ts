import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcountFormPageRoutingModule } from './account-form-routing.module';

import { AccountFormPage } from './account-form.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcountFormPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [AccountFormPage]
})
export class AcountFormPageModule {}
