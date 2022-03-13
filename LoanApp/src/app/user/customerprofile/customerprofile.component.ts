import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {
  ProfileDetails=[
    {
      ApplicantName:'raj',ApplicantPhoneno:'567',ApplicantAddress:'addr',ApplicantLoanId:'567',ApplicantSal:'50000',ApplicantEmail:'abc@gmail.com',ApplicantEmi:'2000'
    }
  ]
  constructor() { }
  

  ngOnInit(): void {
  }

}
