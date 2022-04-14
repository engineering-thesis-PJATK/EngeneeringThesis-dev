import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../tickets';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent implements OnInit {
  @Input() ticket: Ticket = {idTicket: 0, title: '',  description: '', endDate: ''}
  constructor() { }

  ngOnInit(): void {
  }

}
