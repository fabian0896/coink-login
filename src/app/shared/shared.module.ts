import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { NumPadComponent } from './components/num-pad/num-pad.component';



@NgModule({
  declarations: [
    StepperComponent,
    NumPadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StepperComponent,
    NumPadComponent,
  ]
})
export class SharedModule { }
