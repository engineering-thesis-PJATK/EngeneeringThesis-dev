import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { firstValueFrom, Observable, switchMap } from 'rxjs';
import { Employee, TeamEmployee, TeamRole, TempMember } from 'src/app/models/employee';
import { Team } from 'src/app/models/team';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { TeamService } from 'src/app/services/team/team.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.scss']
})
export class TeamEditComponent implements OnInit, AfterViewInit {
  @ViewChild('editEmp') editEmp!: ElementRef;
  @ViewChild('roleEdit') roleEdit!: ElementRef;
  
  teamDetails!: Observable<Team>;
  teamMembers!: Observable<TeamEmployee[]>;
  employees!: Employee[];
  roles!: Partial<TeamRole[]>;
  sendingEmployee: Partial<TempMember> = {};
  editedMember!: TeamEmployee;
  constructor(private http: TeamService, private route: ActivatedRoute, private location: Location, private empHttp: EmployeeService) { }

  ngOnInit(): void {
    this.getMembers();
    this.teamDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getTeam(params.get('id') || '0'))
    );
    
    this.empHttp.getEmployees().subscribe(emp => this.employees = emp);
    this.empHttp.getRoles().subscribe(emp => this.roles = emp);
  }

  ngAfterViewInit(): void {
    this.loadSelect();
    this.initCollapsible();
  }

  loadSelect(): void {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  }

  initCollapsible() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  }

  getMembers(): void {
    this.teamMembers = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.empHttp.getTeamMembers(params.get('id') || '0'))
    );
  }

  setMember(member: TeamEmployee): void {
    this.editedMember = member;
    this.editEmp.nativeElement.value = this.editedMember.empName;
  }
  
  async updateMember(): Promise<void> {
    let team = await firstValueFrom(this.teamDetails);
    this.empHttp.putTeamMember(this.editedMember,team.temId)
    this.getMembers();
  }

  async deleteMember(member: TeamEmployee): Promise<void> {
    let team = await firstValueFrom(this.teamDetails);
    this.empHttp.deleteTeamMember(member,team.temId);
    this.getMembers();
  }

  async addMember(member: Partial<TempMember>) {
    var emp =  this.employees.find(item => item?.empId == member?.empId);
    var role = this.roles.find(item => item?.etrId == member.empRole);

    if(role === undefined)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to choose role!',
      });
      return;
    }

    if(emp === undefined)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to choose employee!',
      });
      return;
    }
    
    let tmpMembers: TeamEmployee[] = [];
    this.teamMembers.subscribe(emp => tmpMembers = emp);
    var tmpMember = tmpMembers.find(x => x.empId == member.empId);

    if(tmpMember !== undefined)
    {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'You have already added this employee!',
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
    let team = await firstValueFrom(this.teamDetails);
    this.empHttp.postTeamMember(tempEmp,team.temId);
    this.getMembers();
  }
}
