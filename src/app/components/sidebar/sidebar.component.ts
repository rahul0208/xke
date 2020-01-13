import { Component, OnInit, HostListener } from '@angular/core';
import { LINKS } from 'app/layouts/admin-layout/admin-layout.routing';
import { RouteInfo } from 'app/layouts/admin-layout/route-info.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[];
  private innerWidth: any;
  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.menuItems = LINKS.filter(menuItem => menuItem.position.indexOf('side') !== -1);
  }
  
  isMobileMenu() {
      return (this.innerWidth <= 991);
  };

  @HostListener('window:resize', ['$event'])
  onResize($event) {
    this.innerWidth = window.innerWidth;
  }
}
