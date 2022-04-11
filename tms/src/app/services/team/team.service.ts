import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Team } from 'src/app/models/team';
import { ApiPaths, Environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private url = Environment.baseUrl;
  constructor(private http: HttpClient) { }

  postTeam(team: Team): Observable<string[]> {
    return this.http.post<string[]>(this.url+ApiPaths.Team,team).pipe(tap(console.log));
  }
  
}
