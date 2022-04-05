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
    //return this.http.get<Employee[]>(this.url+ApiPaths.Employee).pipe(tap(console.log));
    let cmps: Employee[] = [
      { empId: 1, empName: 'Jan', empPhoneNumber: '223441425', empEmail: 'Poland',empLogin:'x',empSurname:'Kowalski' },
      { empId: 2, empName: 'Jonh X', empPhoneNumber: '456456234', empEmail: 'Poland',empLogin:'x',empSurname:'Kowalski'  },
      { empId: 3, empName: 'Barbara Squirrel', empPhoneNumber: '666264362', empEmail: 'Poland',empLogin:'x',empSurname:'Kowalski'  },
    ];
    return of(cmps);
  }

  getPriveleges(): Observable<EmployeePrivilege[]> {
    let privileges: EmployeePrivilege[] = [
      { id: 1, name: 'User'},
      { id: 2, name: 'Admin'},
    ]
    return of(privileges);
    //return this.http.get<EmployeePrivilege[]>(this.url+ApiPaths.EmployeePrivilege).pipe(tap(console.log));
  }
}
