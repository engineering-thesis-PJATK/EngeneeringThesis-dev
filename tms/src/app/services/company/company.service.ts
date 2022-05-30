import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { CompanyCard,CompanySelect,CompanySend } from 'src/app/models/company';
import { Environment } from '../environment';
import { ApiPaths } from '../environment';
import { HandlerService } from '../handler/handler.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = Environment.baseUrl;
  constructor(private http: HttpClient, private handler: HandlerService) {

   }

   getCompanies(): Observable<CompanyCard[]> {
      // return this.http.get<CompanyCard[]>(this.url+ApiPaths.Company,{observe: 'response'}).pipe(map(data => {
        
      //   //console.log("Here will be return response code Ex :200", data.status)
      //   //return data.status
      //   console.log(data);
      // }), catchError(this.handler.handleError));
      return this.http.get<CompanyCard[]>(this.url+ApiPaths.Company).pipe();///*map(data=>{}),*/catchError(this.handler.handleError));
   }

   postCompany(company: CompanySend): Observable<any> {
     return this.http.post<any>(this.url+ApiPaths.Company,company).pipe(tap(console.log),catchError(this.handler.handleError));
   }

   getCompaniesSelect(): Observable<CompanySelect[]> {
     //return this.http.get<CompanySelect[]>(this.url+ApiPaths.CustomerSelect).pipe(tap(console.log));
     let cmps: CompanySelect[] = [
       {cmpId: 1, cmpName: 'first company'},
       {cmpId: 2, cmpName: 'sec company'},
       {cmpId: 3, cmpName: 'third company'}
     ];
     return of(cmps);
   }
   getCompanyById(cmpId: number): Observable<CompanyCard> {
     return this.http.get<CompanyCard>(this.url+ApiPaths.Company+'/' + cmpId).pipe(tap(console.log));
   }
}
