import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit, AfterViewInit {
  employees: Partial<Employee[]> = [];
  

  constructor(private empHttp: EmployeeService) { }

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('.autocomplete');
    let empMap: {[key: string]: string | null} = {};
    this.employees.forEach(emp => {
      empMap[emp?.empName+' '+emp?.empSurname] = null;
    });
    var options = {
      data: empMap
    }
    var instances = M.Autocomplete.init(elems, options);
  }

  ngOnInit(): void {
    this.empHttp.getEmployees().subscribe(emp => this.employees = emp);
  }



}
