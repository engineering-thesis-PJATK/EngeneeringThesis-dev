import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-calendar',
  templateUrl: './employee-calendar.component.html',
  styleUrls: ['./employee-calendar.component.scss']
})
export class EmployeeCalendarComponent implements OnInit {
  viewDate: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
