import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Account } from 'src/app/models/account';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:3000/api/register';

  constructor(private http: HttpClient) { 

  }

  registerAccount(account: Account): Observable<string[]> {
    return this.http.post<string[]>(this.url, account).pipe(tap(console.log), catchError(this.handleError));
  }
  
  private handleError(error: HttpErrorResponse) {
    console.error(
      `Name: ${error.name} \n`+
      `Message: ${error.message} \n`+
      `Status code: ${error.status} \n`
    );
    return throwError('Something bad happend; please try again later.');
  }

}
