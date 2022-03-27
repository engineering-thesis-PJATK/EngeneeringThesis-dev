import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { EmployeePrivilege } from '../../models/employeePrivilege';
import { EmployeeSimple } from '../../models/employeeSimple';
import { Environment } from '../environment';
import { ApiPaths } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private url = Environment.baseUrl;
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<EmployeeSimple[]> {
    return this.http.get<EmployeeSimple[]>(this.url+ApiPaths.Employee).pipe(tap(console.log));
  }

  getPriveleges(): Observable<EmployeePrivilege[]> {
    return this.http.get<EmployeePrivilege[]>(this.url+ApiPaths.EmployeePrivilege).pipe(tap(console.log));
  }
}
