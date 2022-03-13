import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customerloanstatus',
  templateUrl: './customerloanstatus.component.html',
  styleUrls: ['./customerloanstatus.component.css']
})
export class CustomerloanstatusComponent implements OnInit {

  constructor(private router:Router){}
  
  goToPage(pageName:string):void{
    console.warn(pageName);
    this.router.navigate([`${pageName}`]);
  }

  getLoanDeatils(id:any){
    if(id=="rahulkr002264@gmail.com")
    {
      console.warn("idmatched,send all data to the page ");

      this.goToPage("AllLoans");
    }

    

  }
 

  ngOnInit(): void {
  }

}
