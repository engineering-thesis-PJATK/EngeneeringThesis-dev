import { Component, Input, OnInit } from '@angular/core';
import { EmployeeSimple } from 'src/app/models/employeeSimple';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
@Input() employee: EmployeeSimple = { id: 0, name: '', email:'', phoneNumber: ''};
  constructor() { }

  ngOnInit(): void {
    
  }

}
