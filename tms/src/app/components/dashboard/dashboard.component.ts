import { Component, NgModule, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TicketKanBan } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket/ticket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  waitingTasks!: TicketKanBan[];
  openTasks!: TicketKanBan[];
  doneTasks!: TicketKanBan[];
  constructor(private http: TicketService) { }

  ngOnInit(): void {
    this.http.getWaitingTicketsForKanBan()
    .subscribe( waitingTasksList => {
      this.waitingTasks = waitingTasksList as TicketKanBan[]
    })
    this.http.getOpenTicketsForKanBan()
    .subscribe(openTasksList => {
      this.openTasks = openTasksList as TicketKanBan[]
    })
    this.http.getDoneTicketsForKanBan()
    .subscribe(doneTaskList => {
      this.doneTasks = doneTaskList as TicketKanBan[]
    })
  }
  drop(event: CdkDragDrop<TicketKanBan[]>){
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
