import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeePrivilege } from 'src/app/models/employeePrivilege';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  privilegeList!: Observable<EmployeePrivilege[]>;

  constructor(private http: EmployeeService) { }

  ngOnInit(): void {
    this.privilegeList = this.http.getPriveleges();
  }

}
