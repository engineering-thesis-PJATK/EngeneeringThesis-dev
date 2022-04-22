import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project/project.service';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectDetails!: Observable<Project>;

  constructor(private http: ProjectService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.projectDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getProject(params.get('id') || '0'))
    );
  }

}
