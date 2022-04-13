import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanySelect } from 'src/app/models/company';
import { ProjectSending } from 'src/app/models/project';
import { Team, TeamSelect } from 'src/app/models/team';
import { CompanyService } from 'src/app/services/company/company.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-project-from',
  templateUrl: './project-from.component.html',
  styleUrls: ['./project-from.component.scss']
})
export class ProjectFromComponent implements OnInit {

  project!: Partial<ProjectSending>;
  companies!: Observable<CompanySelect[]>;
  teams!: Observable<TeamSelect[]>;
  constructor(private companyHttp: CompanyService, private teamHttp: TeamService, private projectHttp: ProjectService) { }

  ngOnInit(): void {
    this.companies = this.companyHttp.getCompaniesSelect();
    this.teams = this.teamHttp.getTeams();
  }

  addProject(): void {
    this.projectHttp.postProject(this.project as ProjectSending);
  }

}
