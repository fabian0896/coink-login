import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { NumPadComponent } from './components/num-pad/num-pad.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    StepperComponent,
    NumPadComponent,
    PhoneNumberPipe,
    ModalComponent,
    ErrorModalComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [
    StepperComponent,
    NumPadComponent,
    PhoneNumberPipe,
    ModalComponent,
    ErrorModalComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
