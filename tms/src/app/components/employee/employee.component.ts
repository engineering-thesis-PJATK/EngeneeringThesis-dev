import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeSimple } from 'src/app/models/employeeSimple';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees!: Observable<EmployeeSimple[]>;
  constructor(private http: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.http.getEmployees();
  }

}
