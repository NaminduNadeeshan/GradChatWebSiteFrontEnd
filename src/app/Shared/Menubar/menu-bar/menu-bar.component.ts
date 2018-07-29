import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  isShowUserDropDown = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  userShowHide() {
    this.isShowUserDropDown = !this.isShowUserDropDown;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
