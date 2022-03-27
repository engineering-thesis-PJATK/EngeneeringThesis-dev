import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { EmployeePrivilege } from '../../models/employeePrivilege';
import { Employee } from '../../models/employee';
import { Environment } from '../environment';
import { ApiPaths } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private url = Environment.baseUrl;
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url+ApiPaths.Employee).pipe(tap(console.log));
    // let cmps: Employee[] = [
    //   { id: 1, name: 'Jan Kowalski', phoneNumber: '223441425', email: 'Poland' },
    //   { id: 2, name: 'Jonh X', phoneNumber: '456456234', email: 'Poland' },
    //   { id: 3, name: 'Barbara Squirrel', phoneNumber: '666264362', email: 'Poland' },
    // ];
    // return of(cmps);
  }

  getPriveleges(): Observable<EmployeePrivilege[]> {
    return this.http.get<EmployeePrivilege[]>(this.url+ApiPaths.EmployeePrivilege).pipe(tap(console.log));
  }
}
