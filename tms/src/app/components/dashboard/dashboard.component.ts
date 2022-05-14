import { Component, NgModule, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Observable, pipe } from 'rxjs';
import { KanbanElement } from 'src/app/models/kanbanElement';
import { KanbanService } from 'src/app/services/kanban/kanban.service';
import { OrganizationaTaskService } from 'src/app/services/organizationalTask/organizationa-task.service';
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
  constructor(private httpKanBan: KanbanService, private httpOrganizationalTask: OrganizationaTaskService) { }
  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
     elems = document.querySelectorAll('.datepicker');
    instances = M.Datepicker.init(elems, {});

    var elems2 = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems2, {});
  }
  ngOnInit(): void {
    this.httpKanBan.getTaskForKanban(1, "Waiting")
    .subscribe( waitingTasksList => {
      this.waitingTasks = waitingTasksList as KanbanElement[]
    })
    this.httpKanBan.getTaskForKanban(1, "Opened")
    .subscribe(openTasksList => {
      this.openTasks = openTasksList as KanbanElement[]
    })
    this.httpKanBan.getTaskForKanban(1, "Completed")
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
        status = "opened";
        break;
      case "doneTaskList":
        status = "completed"
    }
    this.httpKanBan.changeTaskStatusInKanBan(event.container.data[event.currentIndex].type, event.container.data[event.currentIndex].id, status);
  }
  addTask(taskDescription: string){
    var test = this.httpOrganizationalTask.addOrganizationalTask(taskDescription, 1, "Opened").subscribe();
    console.log(test);
    var elem = document.querySelector('.add-task');
    var instance = M.Collapsible.getInstance(elem);
    // var newTask: KanbanElement = {id: 0,name: '', topic: taskDescription, dueDate:'' , type: 1};
    // this.openTasks.push(newTask);
    this.refreshOpened();
    instance.close(0);
  }
  refreshOpened(){
    this.httpKanBan.getTaskForKanban(1, "Opened")
    .subscribe(openTasksList => {
      this.openTasks = openTasksList as KanbanElement[]
    })
    console.log(this.openTasks);
  }
  

}

