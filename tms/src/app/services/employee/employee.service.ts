import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { EmployeeNew, EmployeePrivilege } from '../../models/employee';
import { Employee,  EmployeeEdit, TeamEmployee, TeamRole } from '../../models/employee';
import { Environment } from '../environment';
import { ApiPaths } from '../environment';
import { HandlerService } from '../handler/handler.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private url = Environment.baseUrl;
  constructor(private http: HttpClient, private handler: HandlerService) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url+ApiPaths.Employee).pipe(tap(console.log),catchError(this.handler.handleError));
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.url+ApiPaths.Employee+'/'+id).pipe(tap(console.log),catchError(this.handler.handleError));
   }

  getPriveleges(): Observable<EmployeePrivilege[]> {
    return this.http.get<EmployeePrivilege[]>(this.url+ApiPaths.EmployeePrivilege).pipe(tap(console.log),catchError(this.handler.handleError));
  }

  getForgotPassword(email : string) {
    email = email.replace("@","%40");
    return this.http.get<any>(this.url+ApiPaths.ForgotPassword+`?emailAddress=${email}`).pipe(tap(console.log),catchError(this.handler.handleError));
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
    return this.http.get(this.url+ApiPaths.Employee+'/project/'+id).pipe(tap(console.log),catchError(this.handler.handleError));
    // let cmps: Employee[] = [
    //   { empId: 1, empName: 'Jan', empPhoneNumber: '223441425', empEmail: 'Poland',empLogin:'x',empSurname:'Kowalski' },
    //   { empId: 2, empName: 'Jonh X', empPhoneNumber: '456456234', empEmail: 'Poland',empLogin:'x',empSurname:'Kowalski'  },
    //   { empId: 3, empName: 'Barbara Squirrel', empPhoneNumber: '666264362', empEmail: 'Poland',empLogin:'x',empSurname:'Kowalski'  },
    // ];
    // return of(cmps);
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

  postEmployee(employee: EmployeeNew) {
    return this.http.post<any>(this.url+ApiPaths.Employee,employee).pipe(catchError(this.handler.handleError));
    //return this.http.post<any>(this.url+ApiPaths.Employee,employee).pipe(tap(console.log),catchError(this.handler.handleError));
  }

  postEmployeePrivileges(id: number, privileges: number[]) {
    return this.http.post<any>(this.url+ApiPaths.Employee+`/${id}/roles`,privileges).pipe(catchError(this.handler.handleError));
  }

  // putEmployeePrivileges(id: number, privileges: number[]) {
  //   return this.http.put<any>(this.url+ApiPaths.Employee+`/${id}/roles`,privileges).pipe(catchError(this.handler.handleError));
  // }

  putEmployee(id: number, employee: EmployeeEdit) {
    return this.http.put<any>(this.url+ApiPaths.Employee+`/${id}`,employee).pipe(catchError(this.handler.handleError));
  }

  deleteEmployee(id: number) {
    // TODO : do sprawdzenia
    return this.http.delete<any>(this.url+ApiPaths.Employee+'/'+id).pipe(tap(console.log),catchError(this.handler.handleError));
  }
}
