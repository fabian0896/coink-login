import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcountFormPageRoutingModule } from './acount-form-routing.module';

import { AcountFormPage } from './acount-form.page';
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
  declarations: [AcountFormPage]
})
export class AcountFormPageModule {}
