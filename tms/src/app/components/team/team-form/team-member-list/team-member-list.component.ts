import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanySelect } from 'src/app/models/company';
import { TeamEmployee, Employee, TeamRole } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
//import { FormSelect } from 'materialize-css';
import { CustomerSend } from 'src/app/models/customer';
import { CompanyService } from 'src/app/services/company/company.service';
//declare const M: any;

@Component({
  selector: 'app-team-member-list',
  templateUrl: './team-member-list.component.html',
  styleUrls: ['./team-member-list.component.scss']
})
export class TeamMemberListComponent implements OnInit, AfterViewInit {
  @Input() members!: TeamEmployee[];
  @Output() removeMember = new EventEmitter<TeamEmployee>();
  
  employees: Partial<Employee[]> = [];
  roles: Partial<TeamRole[]> = [];

  constructor(private empHttp: EmployeeService) { }

  ngOnInit(): void {
    this.empHttp.getEmployees().subscribe(emp => this.employees = emp);
    this.empHttp.getRoles().subscribe(emp => this.roles = emp);
  }

  ngAfterViewInit(): void {
    
    this.loadSelect();
    this.loadAuto();
   
  }

  loadAuto(): void {
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

  loadSelect(): void {
    var elems2 = document.querySelectorAll('select');
    var instances2 = M.FormSelect.init(elems2, {});
  }

  
}