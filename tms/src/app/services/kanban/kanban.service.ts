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
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('elementId', id.toString());
    // headers.append('elementType', type.toString());
    // headers.append('status', status);
    // let params = new HttpParams().set('elementId', id.toString()).set('elementType', type.toString()).set('status', status);
    // let search = new URLSearchParams();
    // search.set('elementId', id.toString())
    // search.set('elementType', type.toString());
    // search.set('status', status);
    // console.log(params);
    // console.log(this.url + ApiPaths.Kanban);
    // const httpOptions ={
    //   headers: new HttpHeaders({'elementId':id.toString()})
    // }
    console.log("Update")
    let test:UpdatedElement = {
        elementId: id,
        elementType: type,
        Status: status
    };
    return this.http.put(this.url + ApiPaths.Kanban, test).subscribe();
    //var test = this.http.post('https://localhost:5001/Api/Kanban?elementId=9&elementType=0&status=waiting',params).subscribe();
    // console.log(test);
    // return test;
  }
}
