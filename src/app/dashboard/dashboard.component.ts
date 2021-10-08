import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public userData: any;
  public navLinks: any[] = [];
  public activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Storage',
        link: './storage/',
        index: 0
      }, {
        label: 'Employees',
        link: './employees/',
        index: 1
      }
    ];
    // this.userData = JSON.parse(<string>localStorage.getItem("user"));
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
