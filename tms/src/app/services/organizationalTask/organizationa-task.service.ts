import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewOrganizationalTask } from 'src/app/models/organizationalTask';
import { ApiPaths, Environment } from '../environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationaTaskService {
  private url = Environment.baseUrl;
  constructor(private http: HttpClient) { }
  addOrganizationalTask(description: string, employeeId: number, status: string){
    let NewOrganizationalTask: NewOrganizationalTask = {
      otk_Description: description,
      otk_EmployeeId: employeeId,
      otk_OrganizationalTaskStatus: status
    }
    return this.http.post(this.url + ApiPaths.Kanban, NewOrganizationalTask).pipe();
  }
}
