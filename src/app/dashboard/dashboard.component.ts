import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isAuthenticated:boolean
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.isAuthenticated = this.auth.isAuthenticated();

    this.auth.authStatus.subscribe(ev=>{

      this.isAuthenticated = ev.authenticated;
    
  });
  }
}
