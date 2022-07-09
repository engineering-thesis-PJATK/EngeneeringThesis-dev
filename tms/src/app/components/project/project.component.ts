import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects!: Project[];
  constructor(private http: ProjectService) { }

  ngOnInit(): void {
    // this.projects = this.http.getProjects();
    this.http.getProjects().subscribe(p => this.projects = p);
  }

}
