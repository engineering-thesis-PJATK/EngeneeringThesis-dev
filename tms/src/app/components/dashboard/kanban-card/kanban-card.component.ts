import { Component, Input, OnInit } from '@angular/core';
import { KanbanElement } from 'src/app/models/kanbanElement';
@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent implements OnInit {
  @Input() element: KanbanElement = {id:0, name: '',  topic: '', dueDate:'', type: 0}
  constructor() { }

  ngOnInit(): void {
  }

}
