import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getToken(): any {
    return <string>localStorage.getItem('token');
  }

  public login(body: any): Observable<any>{
    return this.http.post('http://db0e-192-162-140-67.ngrok.io/auth/login', body);
  }
}
