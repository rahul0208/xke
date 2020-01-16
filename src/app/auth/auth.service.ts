import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }
  @Output() authStatus = new EventEmitter<{"authenticated":boolean}>();

  authenticate(email: any, password: any) :boolean{
    this.createSession(email);
    this.authStatus.emit({"authenticated":true})
    return true;
  }

  clearsession() {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("authenticated");
    this.authStatus.emit({"authenticated":false})
  }

  createSession(email){
    sessionStorage.setItem("email",email);
    sessionStorage.setItem("authenticated","true");
  }

  isAuthenticated(): boolean{
    return sessionStorage.getItem("authenticated")==="true";
  }

  
}
