import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees!: Employee[];
  constructor(private http: EmployeeService) { }

  ngOnInit(): void {
    this.http.getEmployees().subscribe(emps => this.employees = emps);
  }

  reloadEmployees() {
    this.http.getEmployees().subscribe(emps => this.employees = emps);
  }
}
