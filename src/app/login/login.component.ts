import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {HttpService} from "../shared/services/http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: string = '';
  public password: string = '';
  public obj = {
    login: 'admin',
    password: 'admin',
  }

  constructor(private router: Router,
              private httpService: HttpService,
              private notifierService: NotifierService) {
  }

  ngOnInit(): void {
  }

  public checkLogin(): void {
    // if (this.obj.login === this.login && this.obj.password === this.password) {
    //   localStorage.setItem('token', 'auth_token');
    //   localStorage.setItem('user', JSON.stringify({name: this.login}));
    //   this.notifierService.notify('success', 'bingo!');
    //   this.router.navigate(['dashboard', 'storage']);
    // } else {
    //   this.notifierService.notify('error', 'wrong data!');
    //   this.login = '';
    //   this.password = '';
    // }

    this.httpService.login({email: this.login, password: this.password}).subscribe(res => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        this.notifierService.notify('success', 'bingo!');
        this.router.navigate(['dashboard', 'storage']);
      }
    })

  }

}
