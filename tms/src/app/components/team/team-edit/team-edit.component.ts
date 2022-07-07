import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee, TeamEmployee, TeamRole, TempMember } from 'src/app/models/employee';
import { Team } from 'src/app/models/team';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { TeamService } from 'src/app/services/team/team.service';
import Swal from 'sweetalert2';
declare const M: any;

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.scss']
})
export class TeamEditComponent implements OnInit, AfterViewInit {
  @ViewChild('editEmp') editEmp!: ElementRef;
  @ViewChild('roleEdit') roleEdit!: ElementRef;
  
  teamDetails!: Team;
  teamMembers!: TeamEmployee[];
  employees!: Employee[];
  roles!: Partial<TeamRole[]>;
  sendingEmployee: Partial<TempMember> = {};
  editedMember!: TeamEmployee;
  firstEdit = true;
  constructor(private http: TeamService, private route: ActivatedRoute, private location: Location, private empHttp: EmployeeService) { }

  ngOnInit(): void {
    this.getMembers();
    // this.teamDetails = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => this.http.getTeam(params.get('id') || '0'))
    // );
    this.http.getTeam(this.route.snapshot.paramMap.get('id') || '0').subscribe(team => this.teamDetails = team);
    this.empHttp.getEmployees().subscribe(emp => this.employees = emp);
    this.empHttp.getRoles().subscribe(emp => this.roles = emp);
  }

  ngAfterViewInit(): void {
    this.initCollapsible();
    this.loadSelect();
  }

  loadSelect(): void {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  }

  initCollapsible() {
    var elems = document.querySelectorAll('.collapsible');
    var options = {
      inDuration: 500,
      outDuration: 500
    }
    var instances = M.Collapsible.init(elems, options);
  }

  getMembers(): void {
    // this.teamMembers = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => this.empHttp.getTeamMembers(params.get('id') || '0'))
    // );
    this.empHttp.getTeamMembers(this.route.snapshot.paramMap.get('id') || '0').subscribe(members => this.teamMembers = members);
  }

  setMember(member: TeamEmployee): void {
    var elem = document.querySelector('.emp-edit');
    var instance = M.Collapsible.getInstance(elem);
    instance.close(0);
    if(this.firstEdit) {
      instance.open(0);
      this.editedMember = member;
      this.editEmp.nativeElement.value = this.editedMember.empName;
    } else {
      setTimeout(() => 
      {
        instance.open(0);
        this.editedMember = member;
        this.editEmp.nativeElement.value = this.editedMember.empName;
      },
      500);
    }
    
    this.firstEdit = false;
  }

  cancelEdit(): void {
    var elem = document.querySelector('.emp-edit');
    var instance = M.Collapsible.getInstance(elem);
    instance.close(0);
    this.firstEdit = true;
  }
  
  updateMember(): void {
    this.empHttp.putTeamMember(this.editedMember,this.teamDetails.temId);//.subscribe();
    this.getMembers();
    var elem = document.querySelector('.emp-edit');
    var instance = M.Collapsible.getInstance(elem);
    instance.close(0);
  }

  deleteMember(member: TeamEmployee): void {
    this.empHttp.deleteTeamMember(member,this.teamDetails.temId);//.subscribe();
    this.getMembers();
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
    
    //let tmpMembers: TeamEmployee[] = [];
    //this.teamMembers.subscribe(emp => tmpMembers = emp);
    var tmpMember = this.teamMembers.find(x => x.empId == member.empId);

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
    this.empHttp.postTeamMember(tempEmp,this.teamDetails.temId);//.subscribe();
    this.getMembers();
  }
}
