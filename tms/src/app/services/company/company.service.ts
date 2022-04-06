import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { CompanyCard,CompanySelect,CompanySend } from 'src/app/models/company';
import { Environment } from '../environment';
import { ApiPaths } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = Environment.baseUrl;
  constructor(private http: HttpClient) {

   }

   getCompanies(): Observable<CompanyCard[]> {
      //this.http.get(this.url+ApiPaths.Company).subscribe(responseData => console.log(responseData));
      //return this.http.get<CompanyCard[]>(this.url+ApiPaths.Company).pipe(tap(console.log));
      let cmps: CompanyCard[] = [
        { cmpId: 1, cmpName: 'first company', cmpCity: 'Warsaw', cmpCountry: 'Poland' },
        { cmpId: 2, cmpName: 'second company', cmpCity: 'Warsaw', cmpCountry: 'Poland' },
        { cmpId: 3, cmpName: 'Jednorożec', cmpCity: 'Berlin', cmpCountry: 'Poland' },
      ];
      return of(cmps);
   }

   postCompany(company: CompanySend): Observable<string[]> {
     return this.http.post<string[]>(this.url+ApiPaths.Company,company).pipe(tap(console.log));
     //dodać jwt do headera
   }

   getCompaniesSelect(): Observable<CompanySelect[]> {
     return this.http.get<CompanySelect[]>(this.url+ApiPaths.CustomerSelect).pipe(tap(console.log));
   }
}
