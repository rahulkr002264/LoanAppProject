import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CustomerloanstatusComponent } from './customerloanstatus/customerloanstatus.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { AppliedLoansModule } from './customerloanstatus/applied-loans/applied-loans.module';


@NgModule({
  declarations: [
    CustomerloanstatusComponent,
    CustomerprofileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,AppliedLoansModule
  ]
})
export class UserModule { }
