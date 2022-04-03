import { Component, NgModule, OnInit } from '@angular/core';
import { Ticket } from './tickets';
import {CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  TasksDone: Ticket[] = [
    {
      idTicket:1,
      title: 'Task1',
      description:'Description of task 1',
      endDate:'01-01-2022'
    },
    {
      idTicket:2,
      title: 'Task2',
      description:'Description of task 2',
      endDate:'01-01-2022'
    },
    {
      idTicket:3,
      title: 'Task3',
      description:'Description of task 3',
      endDate:'01-01-2022'
    },
    {
      idTicket:4,
      title: 'Task4',
      description:'Description of task 4',
      endDate:'01-01-2022'
    },
  ]
  TasksToDo: Ticket[] = [
    {
      idTicket:5,
      title: 'Task5',
      description:'Description of task to do 1',
      endDate:'01-01-2022'
    },
    {
      idTicket:6,
      title: 'Task6',
      description:'Description of task 2',
      endDate:'01-01-2022'
    },
    {
      idTicket:7,
      title: 'Task7',
      description:'Description of task 3',
      endDate:'01-01-2022'
    },
    {
      idTicket:8,
      title: 'Task8',
      description:'Description of task 4',
      endDate:'01-01-2022'
    },
  ]
  TasksWaiting: Ticket[] = [
    {
      idTicket:9,
      title: 'Task9',
      description:'Description of task 1',
      endDate:'01-01-2022'
    },
    {
      idTicket:10,
      title: 'Task10',
      description:'Description of task 2',
      endDate:'01-01-2022'
    },
    {
      idTicket:11,
      title: 'Task11',
      description:'Description of task 3',
      endDate:'01-01-2022'
    },
    {
      idTicket:12,
      title: 'Task12',
      description:'Description of task 4',
      endDate:'01-01-2022'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<Ticket[]>){
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
