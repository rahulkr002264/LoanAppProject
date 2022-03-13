import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-all-loans',
  templateUrl: './all-loans.component.html',
  styleUrls: ['./all-loans.component.css']
})
export class AllLoansComponent implements OnInit {
  LoanDetails=[
    {
      ApplicantName:'raj',ApplicantPhoneno:'567',ApplicantPANno:'xxx',ApplicantAddress:'addr',ApplicantLoanId:'567',ApplicantSal:'50000',ApplicantEmail:'abc@gmail.com',ApplicantAadhar:'xxx-xxx-xxx',Approval:'Accepted'
    },
    {
      ApplicantName:'raj',ApplicantPhoneno:'567',ApplicantPANno:'xxx',ApplicantAddress:'addr',ApplicantLoanId:'123',ApplicantSal:'2000',ApplicantEmail:'abc@gmail.com',ApplicantAadhar:'xxx-xxx-xxx',Approval:'Rejected'
    },
    {
      ApplicantName:'raj',ApplicantPhoneno:'567',ApplicantPANno:'xxx',ApplicantAddress:'addr',ApplicantLoanId:'012',ApplicantSal:'50000',ApplicantEmail:'abc@gmail.com',ApplicantAadhar:'xxx-xxx-xxx',Approval:'Accepted'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
