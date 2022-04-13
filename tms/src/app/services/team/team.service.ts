import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Team, TeamSelect } from 'src/app/models/team';
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

  getTeams(): Observable<TeamSelect[]> {
    //return this.http.get<TeamSimple[]>(this.url+ApiPaths.Team).pipe(tap(console.log));
    let teas: TeamSelect[] = [
      {id: 1, Name: 'Team 1'},
      {id: 2, Name: '.NET Team'},
      {id: 3, Name: 'bla bla'},
      {id: 4, Name: 'test123'},
    ];
    return of(teas);
  }
  
}
