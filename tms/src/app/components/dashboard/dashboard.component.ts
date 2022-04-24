import { Component, NgModule, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { KanbanElement } from 'src/app/models/kanbanElement';
import { KanbanService } from 'src/app/services/kanban/kanban.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  waitingTasks!: KanbanElement[];
  openTasks!: KanbanElement[];
  doneTasks!: KanbanElement[];
  constructor(private http: KanbanService) { }

  ngOnInit(): void {
    this.http.getWaitingElementsForKanban()
    .subscribe( waitingTasksList => {
      this.waitingTasks = waitingTasksList as KanbanElement[]
    })
    this.http.getOpenTicketsForKanBan()
    .subscribe(openTasksList => {
      this.openTasks = openTasksList as KanbanElement[]
    })
    this.http.getDoneTicketsForKanBan()
    .subscribe(doneTaskList => {
      this.doneTasks = doneTaskList as KanbanElement[]
    })
  }
  drop(event: CdkDragDrop<KanbanElement[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(
        event.container.data, 
        event.previousIndex, 
        event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data, 
        event.container.data,
        event.previousIndex, 
        event.currentIndex);
    }
  }
}
