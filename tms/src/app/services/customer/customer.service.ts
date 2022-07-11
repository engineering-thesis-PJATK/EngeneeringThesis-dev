import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Customer, CustomerCompany, CustomerSend } from 'src/app/models/customer';
import { Environment } from '../environment';
import { ApiPaths } from '../environment';
import { HandlerService } from '../handler/handler.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = Environment.baseUrl;
  constructor(private http: HttpClient, private handler: HandlerService) {}

  getCustomers(): Observable<CustomerCompany[]> {  
    return this.http.get<CustomerCompany[]>(this.url+ApiPaths.CustomerCompanyName).pipe(tap(console.log),catchError(this.handler.handleError));
  }
  getCustomerById(cusId: number): Observable<Customer> {
    return this.http.get<Customer>(this.url+ApiPaths.Customer+'/' + cusId).pipe(tap(console.log));
  }

  getCustomer(id: string): Observable<CustomerCompany> {
    return this.http.get<CustomerCompany>(this.url+ApiPaths.CustomerCompanyName+'/'+id).pipe(tap(console.log));
  }

  putCustomer(customer: CustomerSend, customerId: number) {
    return this.http.put<any>(this.url+ApiPaths.Customer+'/'+customerId,customer).pipe(tap(console.log),catchError(this.handler.handleError));
  }

  postCustomer(customer: CustomerSend, companyId: number) {
    ///api/Customer/{companyId}
    return this.http.post<any>(this.url+ApiPaths.Customer+`/${companyId}`,customer).pipe(tap(console.log),catchError(this.handler.handleError));
    //return this.http.post<object>(this.url+ApiPaths.Customer,customer).pipe(tap(console.log));
  }

  deleteCustomer(id: number) {
    return this.http.delete<any>(this.url+ApiPaths.Customer+'/'+id).pipe(tap(console.log),catchError(this.handler.handleError));
  }
}
