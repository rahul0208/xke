import { Component, OnInit, HostListener } from '@angular/core';
import { LINKS } from 'app/layouts/admin-layout/admin-layout.routing';
import { RouteInfo } from 'app/layouts/admin-layout/route-info.interface';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[];
  isAuthenticated: boolean;
  private innerWidth: any;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.menuItems = LINKS.filter(menuItem => menuItem.position.indexOf('side') !== -1);
    this.isAuthenticated = this.auth.isAuthenticated();
    this.auth.authStatus.subscribe(ev=>{

        this.isAuthenticated = ev.authenticated;
      
    });
  }
  
  isMobileMenu() {
      return (this.innerWidth <= 991);
  };

  @HostListener('window:resize', ['$event'])
  onResize($event) {
    this.innerWidth = window.innerWidth;
  }
}
