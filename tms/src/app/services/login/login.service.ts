import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Credentials } from '../../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) { 

  }

  postApiKey(credentials: Credentials): Observable<string[]> {
    return this.http.post<string[]>(this.url, credentials).pipe(tap(console.log), catchError(this.handleError));
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
