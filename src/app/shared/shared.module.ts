import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { NumPadComponent } from './components/num-pad/num-pad.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { HeaderComponent } from './components/header/header.component';
import { DatetimeComponent } from './components/datetime/datetime.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    StepperComponent,
    NumPadComponent,
    PhoneNumberPipe,
    ModalComponent,
    ErrorModalComponent,
    HeaderComponent,
    DatetimeComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    StepperComponent,
    NumPadComponent,
    PhoneNumberPipe,
    ModalComponent,
    ErrorModalComponent,
    HeaderComponent,
    DatetimeComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
