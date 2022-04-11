import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamSimple } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teams!: Observable<TeamSimple[]>;
  constructor(private http: TeamService) { }

  ngOnInit(): void {
    this.teams = this.http.getTeams();
  }

}
