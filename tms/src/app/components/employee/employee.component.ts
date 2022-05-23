import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees!: Observable<Employee[]>;
  constructor(private http: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this.http.getEmployees();
    alert(this.employees);
  }//

  reloadEmployees() {
    this.employees = this.http.getEmployees();
  }
}
