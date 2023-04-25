import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{
  Name='';
  Email='';
  MobileNumber='';
  TypeYourMessage='';
   constructor(public loginService:AuthenticationService,private router:Router) { }
  
   /* submit(){
    var status=confirm("submit");
      if(status==true){
        this.router.navigate(['restaurant']);
      }
   }*/
 ngOnInit(){
  }
  Message(){
    if(this.Name === '' || this.Email=== ''|| this.MobileNumber === '' ||  this.TypeYourMessage===''){
      var status = confirm("It is mandatory to fill all the fields");
    }
    else{
    var status = confirm("Successfully Contact");
    if(status==true){
      this.router.navigate(['restaurant']);
    }
  }
  }
}


