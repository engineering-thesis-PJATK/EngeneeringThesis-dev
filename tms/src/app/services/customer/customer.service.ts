import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Customer, CustomerCompany, CustomerSend } from 'src/app/models/customer';
import { Environment } from '../environment';
import { ApiPaths } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = Environment.baseUrl;
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<CustomerCompany[]> {  
    //return this.http.get<Customer[]>(this.url+ApiPaths.Customer).pipe(tap(console.log));
    let cus: CustomerCompany[] = [
      {cur_id: 1, cur_name: 'Adam',cur_surname:'Kowalski', cur_email:'ddd', cur_position:"xxx", cur_comments:'hkdsjhskjfhskjfhdfsdfsdff', cur_idCompany:1, cmp_name: 'FirmaX', cur_phoneNumber:'344239842'},
      {cur_id: 2, cur_name: 'Adam',cur_surname:'Kowalski', cur_email:'ddd', cur_position:"xxx", cur_comments:'hkdsjhskjfhskjfhdfsdfsdff', cur_idCompany:1, cmp_name: 'FirmaX', cur_phoneNumber:'344239842'},
      {cur_id: 3, cur_name: 'Adam',cur_surname:'Kowalski', cur_email:'ddd', cur_position:"xxx", cur_comments:'hkdsjhskjfhskjfhdfsdfsdff', cur_idCompany:2, cmp_name: 'FirmaZ', cur_phoneNumber:'344239842'},
      {cur_id: 4, cur_name: 'Adam',cur_surname:'Kowalski', cur_email:'ddd', cur_position:"xxx", cur_comments:'hkdsjhskjfhskjfhdfsdfsdff', cur_idCompany:2, cmp_name: 'FirmaZ', cur_phoneNumber:'344239842'},
      {cur_id: 5, cur_name: 'Adam',cur_surname:'Kowalski', cur_email:'ddd', cur_position:"xxx", cur_comments:'hkdsjhskjfhskjfhdfsdfsdff', cur_idCompany:2, cmp_name: 'FirmaZ', cur_phoneNumber:'344239842'},
      {cur_id: 6, cur_name: 'Adam',cur_surname:'Kowalski', cur_email:'ddd', cur_position:"xxx", cur_comments:'hkdsjhskjfhskjfhdfsdfsdff', cur_idCompany:3, cmp_name: 'FirmaD', cur_phoneNumber:'344239842'},
      {cur_id: 7, cur_name: 'Adam',cur_surname:'Kowalski', cur_email:'ddd', cur_position:"xxx", cur_comments:'hkdsjhskjfhskjfhdfsdfsdff', cur_idCompany:3, cmp_name: 'FirmaD', cur_phoneNumber:'344239842'},
      {cur_id: 8, cur_name: 'Adam',cur_surname:'Kowalski', cur_email:'ddd', cur_position:"xxx", cur_comments:'hkdsjhskjfhskjfhdfsdfsdff', cur_idCompany:4, cmp_name: 'Firmawerw', cur_phoneNumber:'344239842'},
    ]
    return of(cus);
  }

  getCustomer(id: string): Observable<Partial<Customer>> {
    //return this.http.get<Partial<Customer>>(this.url+ApiPaths.Customer+'/'+id).pipe(tap(console.log));
    let customer: Partial<Customer> = {cur_id: 1, cur_name: 'Adam',cur_surname:'Kowalski', cur_email:'ddd', cur_position:"xxx", cur_comments:'hkdsjhskjfhskjfhdfsdfsdff', cur_idCompany:1, cmp_name: 'FirmaX', cur_phoneNumber:'344239842'}
    return of(customer);
  }

  putCustomer(customer: Partial<Customer>) {
    //return this.http.put<object>(this.url+ApiPaths.Customer,customer).pipe(tap(console.log));

  }

  postCustomer(customer: CustomerSend) {
    //return this.http.post<object>(this.url+ApiPaths.Customer,customer).pipe(tap(console.log));
  }

  deleteCustomer(id: number): string {
    //return this.http.delete<object>(this.url+ApiPaths.Customer+'/'+id).pipe(tap(console.log));
    return 'ok';
  }
}
