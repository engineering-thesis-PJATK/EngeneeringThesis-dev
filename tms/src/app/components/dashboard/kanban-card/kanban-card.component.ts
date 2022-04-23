import { Component, Input, OnInit } from '@angular/core';
import { TicketKanBan } from 'src/app/models/ticket';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent implements OnInit {
  @Input() ticket: TicketKanBan = {ticId: 0, ticName: '',  ticTopic: '', ticDueDate: ''}
  constructor() { }

  ngOnInit(): void {
  }

}
