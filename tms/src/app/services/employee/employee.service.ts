import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { EmployeePrivilege } from '../../models/employeePrivilege';
import { Employee, EmployeeEdit, EmployeeSend, TeamEmployee, TeamRole } from '../../models/employee';
import { Environment } from '../environment';
import { ApiPaths } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private url = Environment.baseUrl;
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
   // return this.http.get<Employee[]>(this.url+ApiPaths.Employee).pipe(tap(console.log));
    
    let cmps: Employee[] = [
      { empId: 1, empName: 'Jan', empPhoneNumber: '223441425', empEmail: 'Poland',empLogin:'x',empSurname:'Kowalski' },
      { empId: 2, empName: 'Jonh X', empPhoneNumber: '456456234', empEmail: 'Poland',empLogin:'x',empSurname:'Kowalski'  },
      { empId: 3, empName: 'Barbara Squirrel', empPhoneNumber: '666264362', empEmail: 'Poland',empLogin:'x',empSurname:'Kowalski'  },
    ];
    return of(cmps);
  }

  getEmployee(id: string): Observable<EmployeeEdit> {
    // return this.http.get<Employee>(this.url+ApiPaths.Employee+'/'+id).pipe(tap(console.log));
     
     let emp: EmployeeEdit = {
       empId: 1, empName: 'Jan', empPhoneNumber: '223441425', empEmail: 'Poland', empLogin: 'x', empSurname: 'Kowalski',
       empPrivileges: [{ id: 1, name: 'User'}]
     };
     return of(emp);
   }

   getEmployeePrivileges(id: string): Observable<EmployeePrivilege[]> {
    let privileges: EmployeePrivilege[] = [
      { id: 1, name: 'User'},
    ]
    return of(privileges);
   }

  getPriveleges(): Observable<EmployeePrivilege[]> {
    let privileges: EmployeePrivilege[] = [
      { id: 1, name: 'User'},
      { id: 2, name: 'Admin'},
    ]
    return of(privileges);
    //return this.http.get<EmployeePrivilege[]>(this.url+ApiPaths.EmployeePrivilege).pipe(tap(console.log));
  }

  getRoles(): Observable<TeamRole[]> {
    let roles: TeamRole[] = [
      {etrId: 1, etrName: 'TeamLeader'},
      {etrId: 2, etrName: 'FrontendDev'},
      {etrId: 3, etrName: 'BackendDev'},
      {etrId: 4, etrName: 'Product owner'},
    ];
    return of(roles);
  }

  getTeamEmployees(id: string): Observable<Employee[]> {
    //return this.http.get(this.url+ApiPaths.Employee+'/project/'+id).pipe(tap(console.log));
    let cmps: Employee[] = [
      { empId: 1, empName: 'Jan', empPhoneNumber: '223441425', empEmail: 'Poland',empLogin:'x',empSurname:'Kowalski' },
      { empId: 2, empName: 'Jonh X', empPhoneNumber: '456456234', empEmail: 'Poland',empLogin:'x',empSurname:'Kowalski'  },
      { empId: 3, empName: 'Barbara Squirrel', empPhoneNumber: '666264362', empEmail: 'Poland',empLogin:'x',empSurname:'Kowalski'  },
    ];
    return of(cmps);
  }

  getTeamMembers(id: string): Observable<TeamEmployee[]> {
    //return this.http.get(this.url+ApiPaths.Employee+'/project/'+id).pipe(tap(console.log));
    let cmps: TeamEmployee[] = [
      { empId: 1, empName: 'Jan', empSurname:'Kowalski', empRole: {etrId: 1, etrName: 'TeamLeader' } },
      { empId: 2, empName: 'Jonh X', empSurname:'Kowalski', empRole: {etrId: 3, etrName: 'BackendDev' }   },
      { empId: 3, empName: 'Barbara Squirrel', empSurname:'Kowalski', empRole: {etrId: 3, etrName: 'BackendDev' }   },
    ];
    return of(cmps);
  }

  putTeamMember(employee: TeamEmployee, teamId: number){
    //TODO : przygotować http put
  }

  postTeamMember(employee: TeamEmployee, teamId: number){
    //TODO : przygotować http post
  }

  deleteTeamMember(employee: TeamEmployee, teamId: number){
    //TODO : przygotować http delete
  }

  postEmployee(employee: EmployeeSend) {
    return this.http.post<string[]>(this.url+ApiPaths.Employee,employee).pipe(tap(console.log));
  }

  putEmployee(employee: EmployeeEdit) {
    return this.http.put<string[]>(this.url+ApiPaths.Employee,employee).pipe(tap(console.log));
  }
}
