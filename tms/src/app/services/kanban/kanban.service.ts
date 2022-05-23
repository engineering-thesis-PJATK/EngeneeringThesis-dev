import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable , tap} from 'rxjs';
import { KanbanElement, UpdatedElement } from 'src/app/models/kanbanElement';
import { ApiPaths, Environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  private url = Environment.baseUrl;
  constructor(private http: HttpClient) { }
  getTaskForKanban(employeeId: number, status: string): Observable<KanbanElement[]>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('employeeId', employeeId.toString());
    headers.append('status', status); 
    let params = new HttpParams().set('employeeId', employeeId).set('status', status);
    console.log(params);
    return this.http.get<KanbanElement[]>(this.url + ApiPaths.Kanban, {params:params}).pipe(tap(console.log));
  }
  changeTaskStatusInKanBan(type: number, id: number, status:string){
    let updatedKanbanlement:UpdatedElement = {
        elementId: id,
        elementType: type,
        Status: status
    };
    return this.http.put(this.url + ApiPaths.Kanban, updatedKanbanlement).subscribe();
  }
}
