import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Company } from 'src/app/models/company';
import { CompanySimple } from 'src/app/models/companySimple';
import { Environment } from '../environment';
import { ApiPaths } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = Environment.baseUrl;
  constructor(private http: HttpClient) {

   }

   getCompanies(): Observable<CompanySimple[]> {
      //return this.http.get<CompanySimple[]>(this.url+ApiPaths.Company).pipe(tap(console.log));
      let cmps: CompanySimple[] = [
        { id: 1, companyName: 'first company', city: 'Warsaw', country: 'Poland' },
        { id: 2, companyName: 'second company', city: 'Warsaw', country: 'Poland' },
        { id: 3, companyName: 'Jednorożec', city: 'Berlin', country: 'Poland' },
      ];
      return of(cmps);
   }

   postCompany(company: Company): Observable<string[]> {
     return this.http.post<string[]>(this.url+ApiPaths.Company,company).pipe(tap(console.log));
     //dodać jwt do headera
   }
}
