import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanySelect } from 'src/app/models/company';
import { ProjectSending } from 'src/app/models/project';
import { Team, TeamSelect } from 'src/app/models/team';
import { CompanyService } from 'src/app/services/company/company.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { TeamService } from 'src/app/services/team/team.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { Dropdown } from 'materialize-css';
declare const M: any;

@Component({
  selector: 'app-project-from',
  templateUrl: './project-from.component.html',
  styleUrls: ['./project-from.component.scss'],
})
export class ProjectFromComponent implements OnInit, AfterViewInit {
  project: Partial<ProjectSending> = {};
  companies: CompanySelect[] = [];
  teams: TeamSelect[] = [];

  test=false;

  constructor(
    private companyHttp: CompanyService,
    private teamHttp: TeamService,
    private projectHttp: ProjectService,
    private location: Location
  ) {}

  onSwitchTest(): void {
    this.test = !this.test;
  }

  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  }

  ngOnInit(): void {
    //this.companies = this.companyHttp.getCompaniesSelect().subscribe(c => this.companies = c);
    //this.teams = this.teamHttp.getTeams();
    this.companyHttp
      .getCompaniesSelect()
      .subscribe((c) => (this.companies = c));
    this.teamHttp.getTeams().subscribe((t) => (this.teams = t));

    var options = {
      edge: 'left'//'right' //niestety nie działa :c
    }
     var elems = document.querySelectorAll('.sidenav');
     var instances = M.Sidenav.init(elems, options);
  }

  addProject(): void {
    var company = this.companies.find(i => i.cmpId == this.project.companyId);
    var team = this.teams.find(i => i.id == this.project.teamId);

    if(company === undefined)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to choose company!',
        // footer: '<a href="">Why do I have this issue?</a>'
      });
      return;
    }

    if(team === undefined)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to choose team!',
        // footer: '<a href="">Why do I have this issue?</a>'
      });
      return;
    }

    this.projectHttp.postProject(this.project as ProjectSending);
  }

  returnButtonClick() {
    this.location.back();
  }
}

// document.addEventListener('DOMContentLoaded', function() {
//   var options = {
//     edge: 'right'
//   }
//    var elems = document.querySelectorAll('.sidenav');
//    var instances = M.Sidenav.init(elems, options);
//  });