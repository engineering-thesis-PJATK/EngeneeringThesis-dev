import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Company,CompanySend } from 'src/app/models/company';
import { CompanyAddress } from 'src/app/models/companyAddress';
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

   getCompanies(): Observable<Company[]> {
      return this.http.get<Company[]>(this.url+ApiPaths.Company).pipe(catchError(this.handler.handleError));
   }

   getCompany(id: string): Observable<Company> {
    return this.http.get<Company>(this.url+ApiPaths.Company+'/'+id).pipe(tap(console.log),catchError(this.handler.handleError));
   }

   getCompanyAddresses(id: string): Observable<CompanyAddress[]> {
    return this.http.get<CompanyAddress[]>(this.url+ApiPaths.Company+'/'+id+ApiPaths.Address).pipe(tap(console.log),catchError(this.handler.handleError));
   }

   postCompany(company: CompanySend): Observable<any> {
     return this.http.post<any>(this.url+ApiPaths.Company,company).pipe(tap(console.log),catchError(this.handler.handleError));
   }

   putCompany(companyId: number, company: CompanySend): Observable<any> {
    return this.http.put<any>(this.url+ApiPaths.Company+'/'+companyId,company).pipe(tap(console.log),catchError(this.handler.handleError));
   }

   deleteCompany(companyId: number) {
    return this.http.delete<any>(this.url+ApiPaths.Company+'/'+companyId).pipe(tap(console.log),catchError(this.handler.handleError));
   }

   postCompanyAddress(companyId: number, address: CompanyAddress): Observable<any> {
    return this.http.post<any>(this.url+ApiPaths.Company+'/'+companyId+ApiPaths.Address,address).pipe(tap(console.log),catchError(this.handler.handleError));
   }

   putCompanyAddress(address: CompanyAddress) {
    return this.http.put<any>(this.url+ApiPaths.Company+ApiPaths.Address+'/'+address.adrId,address).pipe(tap(console.log),catchError(this.handler.handleError));
   }

   deleteCompanyAddress(addressId: number) {
    return this.http.delete<any>(this.url+ApiPaths.Company+ApiPaths.Address+'/'+addressId).pipe(tap(console.log),catchError(this.handler.handleError));
   }

   getCompaniesSelect(): Observable<Company[]> {
     return this.http.get<Company[]>(this.url+ApiPaths.Company).pipe(tap(console.log),catchError(this.handler.handleError));
    //  let cmps: CompanySelect[] = [
    //    {cmpId: 1, cmpName: 'first company'},
    //    {cmpId: 2, cmpName: 'sec company'},
    //    {cmpId: 3, cmpName: 'third company'}
    //  ];
    //  return of(cmps);
   }
   getCompanyById(cmpId: number): Observable<CompanyCard> {
     return this.http.get<CompanyCard>(this.url+ApiPaths.Company+'/' + cmpId).pipe(tap(console.log));
   }
}
