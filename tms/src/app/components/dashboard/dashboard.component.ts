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
  }
  ngOnInit(): void {
    this.http.getWaitingElementsForKanban()
    .subscribe( waitingTasksList => {
      this.waitingTasks = waitingTasksList as KanbanElement[]
    })
    this.http.getOpenTicketsForKanBan()
    .subscribe(openTasksList => {
      this.openTasks = openTasksList as KanbanElement[]
    })
    // this.http.getDoneTicketsForKanBan()
    // .subscribe(doneTaskList => {
    //   this.doneTasks = doneTaskList as KanbanElement[]
    // })
    this.http.getTaskForKanban(1, 1)
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
  }
  addTask(taskDescription: string, taskDate: string){
    var elem = document.querySelector('.add-task');
    var instance = M.Collapsible.getInstance(elem);
    var newTask: KanbanElement = {name: '', topic: taskDescription, dueDate: taskDate, type: 1};
    this.openTasks.push(newTask);
    instance.close(0);
  }
}
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, {});
});
