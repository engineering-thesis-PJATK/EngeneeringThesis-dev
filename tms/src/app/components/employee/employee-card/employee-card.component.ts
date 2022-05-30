import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';
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
    this.http.deleteEmployee(this.employee.empId).pipe(
      map(res => {
        if(res.statusCode == 200) {
          this.getEmployees.emit();
        }
      })
    ).subscribe();
  }
}
