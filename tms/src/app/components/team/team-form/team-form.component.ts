import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Employee, TeamEmployee } from 'src/app/models/employee';
import { Team } from 'src/app/models/team';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { TeamService } from 'src/app/services/team/team.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit, AfterViewInit {
  employees: Partial<Employee[]> = [];
  showList = false;
  buttonShowListText: string = 'Next';
  
  //sendingTeam: Team = {temName: ''};
  sendingTeamName: string = '';

  constructor(private empHttp: EmployeeService, private teamHttp: TeamService,private location: Location) { }

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

  onSwitchList(): void {
    this.showList = !this.showList;
    if(this.showList)
    {
      this.buttonShowListText = 'Previous';
    }
    else
    {
      this.buttonShowListText = 'Next';
    }
  }

  onNewMember(member: TeamEmployee)
  {
    //this.sendingTeam.members?.push(member);
  }

  onDeleteMember(member: TeamEmployee) {
    //this.sendingTeam.members = this.sendingTeam.members?.filter(item => item !== member);
  }

  addTeam(): void {
    // this.teamHttp.postTeam(this.sendingTeam as Team).subscribe(
    //   //
    // );
    console.log(this.sendingTeamName);
  }

  returnButtonClick() {
    this.location.back();
  }

}
