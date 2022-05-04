import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , tap} from 'rxjs';
import { KanbanElement } from 'src/app/models/kanbanElement';
import { ApiPaths, Environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  private url = Environment.baseUrl;
  constructor(private http: HttpClient) { }
  getWaitingElementsForKanban(): Observable<KanbanElement[]>{
    return this.http.get<KanbanElement[]>(this.url + ApiPaths.Kanban + '?employeeId=1&statusId=2').pipe(tap(console.log));
  }
  getOpenTicketsForKanBan(): Observable<KanbanElement[]>{
    return this.http.get<KanbanElement[]>(this.url + ApiPaths.Kanban + '?employeeId=1&statusId=1').pipe(tap(console.log));
  }
  getDoneTicketsForKanBan(): Observable<KanbanElement[]>{
    return this.http.get<KanbanElement[]>(this.url + ApiPaths.Kanban + '?employeeId=1&statusId=3').pipe(tap(console.log));
  }
  getTaskForKanban(employeeId: number, statusId: number): Observable<KanbanElement[]>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('employeeId', employeeId.toString());
    headers.append('statusId', statusId.toString());
    let params = new HttpParams().set('employeeId', employeeId).set('statusId', statusId);
    return this.http.get<KanbanElement[]>(this.url + ApiPaths.Kanban, {params:params}).pipe(tap(console.log));
  }
}
