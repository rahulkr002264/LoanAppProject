import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllLoansComponent } from './all-loans/all-loans.component';

const routes: Routes = [
  {
    path:'AllLoans',
    component:AllLoansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppliedLoansRoutingModule { }
