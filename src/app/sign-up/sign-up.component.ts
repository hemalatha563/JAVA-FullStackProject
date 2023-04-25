import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  Name='';
  Email='';
  Password='';
  MobileNo='';
  Message='';
   constructor(public loginService:AuthenticationService,private router:Router) { }
  

 ngOnInit(){
  }
  Submit(){
    if(this.Name === '' || this.Email=== ''|| this.Password=== ''|| this.MobileNo === '' ||  this.Message==='')
    {
      var status = confirm("It is mandatory to fill all the fields");
    }
    else{
    var status = confirm("Successfully Register");
    if(status==true){
      this.router.navigate(['login-page']);
    }
  }
  }
}