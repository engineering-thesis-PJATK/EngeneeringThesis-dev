import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap} from 'rxjs';
import { ApiPaths, Environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private url = Environment.baseUrl;

  constructor(private http: HttpClient) { }
  changePassword(emailAddress: string): Observable<any>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('emailAddress', emailAddress);
    let params = new HttpParams().set('emailAddress', emailAddress);
    console.log(this.url+ApiPaths.RemindPassword);
    console.log(params);
    return this.http.get(this.url+ApiPaths.RemindPassword, {params: params}).pipe(tap(console.log));
  }
}
