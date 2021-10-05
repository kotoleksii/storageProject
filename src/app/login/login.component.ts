import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public name: string = '';
  public password: string = '';
  public keyObj = {
    name: 'admin',
    password: 'admin',
  }

  constructor(private router: Router, private notifierService: NotifierService) {
  }

  ngOnInit(): void {
  }

  public login(): void {
    if (this.keyObj.name === this.name && this.keyObj.password === this.password) {
      localStorage.setItem('token', 'auth_token');
      localStorage.setItem('userName', this.keyObj.name);
      this.name = '';
      this.password = '';
      this.router.navigate(['dashboard']);
    } else {
      this.name = '';
      this.password = '';
      this.notifierService.notify('error', 'wrong data!');
    }
  }

}
