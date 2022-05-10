import { Component, Input, OnInit } from '@angular/core';
import { timeEntryHeader, timeEntryReport } from 'src/app/models/report';

@Component({
  selector: 'app-details-part',
  templateUrl: './details-part.component.html',
  styleUrls: ['./details-part.component.scss']
})
export class DetailsPartComponent implements OnInit {
  @Input() group!: timeEntryHeader;
  constructor() { }

  ngOnInit(): void {
  }

}
