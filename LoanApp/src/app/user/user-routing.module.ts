import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerloanstatusComponent } from './customerloanstatus/customerloanstatus.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';

const routes: Routes = [
  {
    path:"user",children:[
      {path:"getProfile",component:CustomerprofileComponent},
      {path:"viewLoan",component: CustomerloanstatusComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
