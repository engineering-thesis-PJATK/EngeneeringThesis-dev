import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Project, ProjectSending } from 'src/app/models/project';
import { ApiPaths, Environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private url = Environment.baseUrl;
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    //return this.http.get<Project[]>(this.url+ApiPaths.Project).pipe(tap(console.log));
    let projects: Project[] = [
      { prjId: 1, prjName: 'first project', prjDescription: 'description dfjlkfdjfksfdsfdsfsfdsf  sdf sdf', companyId: 1, companyName: 'first compnay', teamId: 1, teamName: 'abc team name'},
      { prjId: 1, prjName: 'first project', prjDescription: 'description dfjlkfdjfksfdsfdsfsfdsf  sdf sdf', companyId: 1, companyName: 'first compnay', teamId: 1, teamName: 'abc team name'},
      { prjId: 1, prjName: 'first project', prjDescription: 'description dfjlkfdjfksfdsfdsfsfdsf  sdf sdf', companyId: 1, companyName: 'first compnay', teamId: 1, teamName: 'abc team name'}
    ];
    return of(projects);
  }

  postProject(project: ProjectSending): Observable<string> {
    return this.http.post(this.url+ApiPaths.Project,project).pipe(tap(console.log));
  }
}
