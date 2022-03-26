import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Account } from 'src/app/models/account';
import { Credentials } from 'src/app/models/credentials';
import { Environment } from '../environment';
import { ApiPaths } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = Environment.baseUrl;

  constructor(private http: HttpClient) { 

  }

  postApiKey(creds: Credentials): Observable<string[]> {
    return this.http.post<string[]>(this.url+ApiPaths.Login, creds).pipe(tap(console.log));//, catchError(this.handleError));
  }

  registerAccount(acc: Account): Observable<string[]> {
    return this.http.post<string[]>(this.url+'/signup', acc).pipe(tap(console.log));
  }

  getAccountDetails() {
    //TODO :)
  }

  private handleError(error: HttpErrorResponse) {
    console.error(
      `Name: ${error.name} \n`+
      `Message: ${error.message} \n`+
      `Status code: ${error.status} \n`
    );
    //return throwError('Something bad happend; please try again later.');
    // return throwError(() => new Error('bad' + Date.now())).subscribe({
    //   error: console.error 
    // })
  }
}
