import { HttpClient } from '@angular/common/http';
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
}
