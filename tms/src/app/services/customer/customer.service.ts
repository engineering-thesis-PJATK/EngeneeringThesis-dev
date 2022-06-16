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

  getCustomer(id: string): Observable<CustomerCompany> {
    return this.http.get<CustomerCompany>(this.url+ApiPaths.CustomerCompanyName+'/'+id).pipe(tap(console.log));
    //let customer: Partial<Customer> = {cur_id: 1, cur_name: 'Adam',cur_surname:'Kowalski', cur_email:'ddd', cur_position:"xxx", cur_comments:'hkdsjhskjfhskjfhdfsdfsdff', cur_idCompany:1, cmp_name: 'FirmaX', cur_phoneNumber:'344239842'}
    //return of(customer);
  }

  putCustomer(customer: CustomerSend, customerId: number) {
    return this.http.put<any>(this.url+ApiPaths.Customer+'/'+customerId,customer).pipe(tap(console.log),catchError(this.handler.handleError));
  }

  postCustomer(customer: CustomerSend, companyId: number) {
    ///api/Customer/{companyId}
    return this.http.post<any>(this.url+ApiPaths.Customer+`/${companyId}`,customer).pipe(tap(console.log),catchError(this.handler.handleError));
    //return this.http.post<object>(this.url+ApiPaths.Customer,customer).pipe(tap(console.log));
  }

  deleteCustomer(id: number): string {
    //return this.http.delete<object>(this.url+ApiPaths.Customer+'/'+id).pipe(tap(console.log));
    return 'ok';
  }
}
