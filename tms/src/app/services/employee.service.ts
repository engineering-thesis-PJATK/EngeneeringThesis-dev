import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { EmployeeSimple } from '../models/employeeSimple';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<EmployeeSimple[]> {
    return this.http.get<EmployeeSimple[]>(this.url+'/employees').pipe(tap(console.log));
  }
}
