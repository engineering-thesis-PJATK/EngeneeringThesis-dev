import { Component, NgModule, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { KanbanElement } from 'src/app/models/kanbanElement';
import { KanbanService } from 'src/app/services/kanban/kanban.service';
import { NgForm } from '@angular/forms';
declare const M: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  waitingTasks: KanbanElement[] = [];
  openTasks: KanbanElement[] =[];
  doneTasks: KanbanElement[] = [];
  constructor(private http: KanbanService) { }
  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
     elems = document.querySelectorAll('.datepicker');
    instances = M.Datepicker.init(elems, {});

    var elems2 = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems2, {});
  }
  ngOnInit(): void {
    this.http.getTaskForKanban(1, "Opened")
    .subscribe( waitingTasksList => {
      this.waitingTasks = waitingTasksList as KanbanElement[]
    })
    this.http.getTaskForKanban(1, "Waiting")
    .subscribe(openTasksList => {
      this.openTasks = openTasksList as KanbanElement[]
    })
    this.http.getTaskForKanban(1, "Completed")
    .subscribe(test => {
      this.doneTasks = test as KanbanElement[]
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

    let status!: string;
    switch(event.container.id){
      case "waitingTaskList":
        status = "waiting";
        break;
      case "openTaskList":
        status = "open";
        break;
      case "doneTaskList":
        status = "completed"
    }
    this.http.changeTaskStatusInKanBan(event.container.data[event.currentIndex].type, event.container.data[event.currentIndex].id, status);
  }
  addTask(taskDescription: string){
    var elem = document.querySelector('.add-task');
    var instance = M.Collapsible.getInstance(elem);
    var newTask: KanbanElement = {id: 0,name: '', topic: taskDescription, dueDate:'' , type: 1};
    this.openTasks.push(newTask);
    instance.close(0);
  }

}

