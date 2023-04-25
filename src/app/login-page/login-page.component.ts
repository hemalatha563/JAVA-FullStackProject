import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username ='';
  password ='';
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService){ }

    ngOnInit(){

    }
    checkLogin(){
      var status=confirm("logged in successfully");
      if(this.loginservice.authenticate(this.username, this.password))
      {
        this.router.navigate(['restaurant']);
        console.log("naviagte..");
        this.invalidLogin = false;
    
      }else
      this.invalidLogin = true;
    }

}
    

