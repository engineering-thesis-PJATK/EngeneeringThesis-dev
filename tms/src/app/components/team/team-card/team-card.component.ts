import { Component, Input, OnInit } from '@angular/core';
import { Team, TeamSimple } from 'src/app/models/team';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  @Input() team: TeamSimple = { Name: '', id: 0};
  constructor() { }

  ngOnInit(): void {
  }

}
