import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Company } from 'src/app/models/company';
import { CompanySimple } from 'src/app/models/companySimple';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) {

   }

   getCompanies(): Observable<CompanySimple[]> {
      return this.http.get<CompanySimple[]>(this.url+'/companies').pipe(tap(console.log));
   }

   postCompany(company: Company): Observable<string[]> {
     return this.http.post<string[]>(this.url+'/company',company).pipe(tap(console.log));
     //dodać jwt do headera
   }
}
