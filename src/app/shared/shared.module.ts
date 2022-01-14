import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { NumPadComponent } from './components/num-pad/num-pad.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';



@NgModule({
  declarations: [
    StepperComponent,
    NumPadComponent,
    PhoneNumberPipe,
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
  ]
})
export class SharedModule { }
