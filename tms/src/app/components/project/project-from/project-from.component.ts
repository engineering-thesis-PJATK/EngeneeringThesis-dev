import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProjectSending } from 'src/app/models/project';
import { Team } from 'src/app/models/team';
import { CompanyService } from 'src/app/services/company/company.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { TeamService } from 'src/app/services/team/team.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';
import { Dropdown } from 'materialize-css';
import { Company } from 'src/app/models/company';
declare const M: any;

@Component({
  selector: 'app-project-from',
  templateUrl: './project-from.component.html',
  styleUrls: ['./project-from.component.scss'],
})
export class ProjectFromComponent implements OnInit {
  project: ProjectSending = {
    prjName: '',
    prjDescription: '',
    companyId: 0,
    teamId: 0
  };
  companies: Company[] = [];
  teams: Team[] = [];

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

  ngOnInit(): void {
    this.companyHttp.getCompaniesSelect().subscribe(c => this.companies = c);
    this.teamHttp.getTeams().subscribe(t => this.teams = t);
    this.loadSelects2();

    // Maybe It not work, but the components are also not loading
    // this.companyHttp.getCompaniesSelect().subscribe((response) => {
    //   this.companies = response;
    //   this.teamHttp.getTeams().subscribe((response) => {
    //     this.teams = response;
    //     this.loadSelects();
    //   })

    // });
  }

  loadSelects() {
    var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, {});
  }

  loadSelects2() {
    if(this.companies.length >= 1 || this.teams.length >= 1) {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, {});
    } else {
      setTimeout(() => {
        this.loadSelects();
      }, 100);
    }
  }

  addProject(): void {
    var company = this.companies.find(i => i.cmpId == this.project.companyId);
    var team = this.teams.find(i => i.temId == this.project.teamId);

    if(company === undefined)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to choose company!',
      });
      return;
    }

    if(team === undefined)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to choose team!',
      });
      return;
    }

    this.projectHttp.postProject(this.project as ProjectSending);
  }

  returnButtonClick() {
    this.location.back();
  }
}