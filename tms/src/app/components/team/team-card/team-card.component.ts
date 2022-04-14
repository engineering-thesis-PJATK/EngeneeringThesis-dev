import { Component, Input, OnInit } from '@angular/core';
import { Team, TeamSelect } from 'src/app/models/team';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  @Input() team!: TeamSelect;
  constructor() { }

  ngOnInit(): void {
  }

}
