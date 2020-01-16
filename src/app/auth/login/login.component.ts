import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  

  
  login_Form: FormGroup;
  email = new FormControl("", Validators.required);
  password = new FormControl("", [Validators.required, Validators.minLength(8)]);

  constructor(fb: FormBuilder, 
    private auth : AuthService,
    private router:Router) {
      this.login_Form = fb.group({
          "email": this.email,
          "password": this.password
      });
  }
  ngOnInit() {
    if(this.auth.isAuthenticated()){
      this.router.navigate(['/dashboard'])
    }
    this.auth.authStatus.subscribe(ev=>{
      if(ev.authenticated){
        console.log("authenticated")
        this.router.navigate(['/dashboard'])
      }
    });
     
    
  }
  doLogin(values: any): void {
      if (this.login_Form.valid) {
          if(this.auth.authenticate(values.email, values.password)){
            this.router.navigate(['/dashboard'])
          } else {
            this.auth.clearsession();
          }
      }
  }
}
