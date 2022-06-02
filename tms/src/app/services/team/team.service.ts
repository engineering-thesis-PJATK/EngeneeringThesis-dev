import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Team } from 'src/app/models/team';
import { ApiPaths, Environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private url = Environment.baseUrl;
  constructor(private http: HttpClient) { }

  postTeam(team: Team) {
    return this.http.post<any>(this.url+ApiPaths.Team,team).pipe(tap(console.log));
  }

  getTeams(): Observable<Team[]> {
    //return this.http.get<TeamSimple[]>(this.url+ApiPaths.Team).pipe(tap(console.log));
    let teas: Team[] = [
      {temId: 1, temName: 'Team 1'},
      {temId: 2, temName: '.NET Team'},
      {temId: 3, temName: 'bla bla'},
      {temId: 4, temName: 'test123'},
    ];
    return of(teas);
  }

  getTeam(temId: string): Observable<Team> {
    let team = {temId: 1, temName: 'Team 1'};
    return of(team);
  }
  
}
