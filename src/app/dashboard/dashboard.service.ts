import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IStorage, IEmployee} from "../shared/interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  public getStorageItems(): Observable<IStorage[]> {
    return this.http.get<IStorage[]>('http://bda8-192-162-140-67.ngrok.io/storage');
  }

  public addStorageItem(body: any): Observable<any> {
    return this.http.post('http://6f36-192-162-140-67.ngrok.io/storage', body);
  }

  public editStorageItem(id: number, body: any): Observable<any> {
    return this.http.patch('http://6f36-192-162-140-67.ngrok.io/storage/' + id, body);
  }

  public removeStorageItem(id: number): Observable<any> {
    return this.http.delete<any>('http://6f36-192-162-140-67.ngrok.io/storage/' + id);
  }

  public getEmployeeItems(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>('http://bda8-192-162-140-67.ngrok.io/employee');
  }

  public addEmployeeItem(body: any): Observable<any> {
    return this.http.post('http://bda8-192-162-140-67.ngrok.io/employee', body);
  }

  public editEmployeeItem(id: number, body: any): Observable<any> {
    return this.http.patch('http://bda8-192-162-140-67.ngrok.io/employee/' + id, body);
  }

  public removeEmployeeItem(id: number): Observable<any> {
    return this.http.delete<any>('http://bda8-192-162-140-67.ngrok.io/employee/' + id);
  }
}
