import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
@Input() employee: Employee = {
  empId: 0, empName: '', empSurname: '', empLogin: '',
  empEmail: ''
};
  constructor() { }

  ngOnInit(): void {
    
  }

}
