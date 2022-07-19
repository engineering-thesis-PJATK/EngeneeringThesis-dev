import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Project, ProjectSending, ProjectTask, TaskTime } from 'src/app/models/project';
import { ApiPaths, Environment } from '../environment';
import { HandlerService } from '../handler/handler.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private url = Environment.baseUrl;
  constructor(private http: HttpClient, private handler: HandlerService) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url+ApiPaths.Project).pipe(tap(console.log),catchError(this.handler.handleError));
  }

  getProjectsExtended(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url+ApiPaths.ProjectExtended).pipe(tap(console.log),catchError(this.handler.handleError));
  }

  postProject(project: ProjectSending): Observable<string> {
    return this.http.post(this.url+ApiPaths.Project,project).pipe(tap(console.log),catchError(this.handler.handleError));
  }

  getProject(id: string): Observable<Project> {
    return this.http.get(this.url+ApiPaths.Project+'/'+id).pipe(tap(console.log),catchError(this.handler.handleError));
  }

  getProjectExtended(id: string): Observable<Project[]> {
    return this.http.get<Project[]>(this.url+ApiPaths.ProjectExtended+'/'+id).pipe(tap(console.log),catchError(this.handler.handleError));
  }

  getTasks(id: string): Observable<ProjectTask[]> {
    return this.http.get(this.url+ApiPaths.ProjectTasks+'/'+id).pipe(tap(console.log),catchError(this.handler.handleError));
    // let tasks: ProjectTask[] = [
    //   { ptId: 1, ptEmpId: 1, ptEmpName: 'Jan Kowalski', ptContent: 'sprawdzić logi', ptEstimatedCost: 21.32, ptState: 'In progress'},
    //   { ptId: 1, ptEmpId: 2, ptEmpName: 'Tomasz Nowak', ptContent: 'Integracja systemów x y', ptEstimatedCost: 221.32, ptState: 'ToDo'},
    //   { ptId: 1, ptEmpId: 3, ptEmpName: 'Tomasz Nowak', ptContent: 'Integracja maili x y', ptEstimatedCost: 221.32, ptState: 'Finished'},
    // ];
    // return of(tasks);
  }

  putTask(task: ProjectTask): Observable<string> {
    //return this.http.put(this.url+ApiPaths.ProjectTasks, task).pipe(tap(console.log));
    return of('ok');
  }

  postTask(task: ProjectTask): Observable<string> {
    //return this.http.post(this.url+ApiPaths.ProjectTasks, task).pipe(tap(console.log));
    return of('ok');
  }

  postTime(time: TaskTime): Observable<string>{
    //
    return of('ok');
  }
}
