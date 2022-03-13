import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppliedLoansRoutingModule } from './applied-loans-routing.module';
import { AllLoansComponent } from './all-loans/all-loans.component';


@NgModule({
  declarations: [
    AllLoansComponent
  ],
  imports: [
    CommonModule,
    AppliedLoansRoutingModule,FormsModule
  ],
  exports:[
    AllLoansComponent
  ]
})
export class AppliedLoansModule { }
