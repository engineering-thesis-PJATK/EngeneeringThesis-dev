import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { TeamEmployee, Employee, TeamRole, TempMember } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { NgModel } from '@angular/forms';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-team-member-list',
  templateUrl: './team-member-list.component.html',
  styleUrls: ['./team-member-list.component.scss']
})
export class TeamMemberListComponent implements OnInit, AfterViewInit {
  @Input() members!: TeamEmployee[];
  //@Output() removeMember = new EventEmitter<TeamEmployee>();
  //@Output() addMember = new EventEmitter<TeamEmployee>();
  
  employees: Partial<Employee[]> = [];
  roles: Partial<TeamRole[]> = [];
  sendingEmployee: Partial<TempMember> = {};

  constructor(private empHttp: EmployeeService,private location: Location) { }

  ngOnInit(): void {
    this.empHttp.getEmployees().subscribe(emp => this.employees = emp);
    this.empHttp.getRoles().subscribe(emp => this.roles = emp);
  }

  ngAfterViewInit(): void {
    this.loadSelect();
  }
  
  loadSelect(): void {
    var elems2 = document.querySelectorAll('select');
    var instances2 = M.FormSelect.init(elems2, {});
  }

  removeMember(member: TeamEmployee) {
    this.members = this.members.filter(item => item != member);
  }

  addMember(member: Partial<TempMember>) {
    var emp =  this.employees.find(item => item?.empId == member?.empId);
    var role = this.roles.find(item => item?.etrId == member.empRole);
    if(role === undefined)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to choose role!',
        // footer: '<a href="">Why do I have this issue?</a>'
      });
      return;
    }

    if(emp === undefined)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to choose employee!',
        // footer: '<a href="">Why do I have this issue?</a>'
      });
      return;
    }

    var tmpMember = this.members.find(x => x.empId == member.empId);
    if(tmpMember !== undefined)
    {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'You have already added this employee!',
        // footer: '<a href="">Why do I have this issue?</a>'
      });
      return;
    }

    let tempEmp: TeamEmployee = {
      empId: emp?.empId,
      empName: emp?.empName,
      empSurname: emp?.empSurname,
      etrId: 0,
      empRole: role
    };
    if(!this.members)
    {
      this.members = [];
    }
    this.members.push(tempEmp);
  }
}