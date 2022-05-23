import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent implements OnInit {
  @Input() employee!: Employee;
  @Output() getEmployees = new EventEmitter();
  constructor(private http: EmployeeService) {}

  ngOnInit(): void {}

  deleteEmployee()  {
    Swal.fire({
      title: 'Do you want to delete a employee?',
      showDenyButton: true,
      confirmButtonText: `Yes, I don't like him`,
      denyButtonText: `No, I want my mommy`,
      icon: 'warning'
    }).then((result) => {
      if (result.isConfirmed) {
        //this.getEmployees.emit();
        this.handleDelete();
      } else if (result.isDenied) {
        // ...
      }
    })
  }

  handleDelete() {
    let response = this.http.deleteEmployee(this.employee.empId);
    if(response == 'ok') {
      this.getEmployees.emit();
    }
    else {
      console.error(response);
    }
  }
}
