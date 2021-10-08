import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IStorage} from "../shared/interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  public getStorageItems(): Observable<IStorage[]> {
    return this.http.get<IStorage[]>('http://db0e-192-162-140-67.ngrok.io/storage');
  }

  public addStorageItem(body: any): Observable<any> {
    return this.http.post('http://db0e-192-162-140-67.ngrok.io/storage', body);
  }

  public editStorageItem(id: number, body: any): Observable<any> {
    return this.http.patch('http://db0e-192-162-140-67.ngrok.io/storage/' + id, body);
  }

  public removeStorageItem(id: number): Observable<any> {
    return this.http.delete<any>('http://db0e-192-162-140-67.ngrok.io/storage/' + id);
  }
}
