import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Location } from '@angular/common';
import { Employee, EmployeeEdit } from 'src/app/models/employee';
import { EmployeePrivilege } from 'src/app/models/employee';
import Swal from 'sweetalert2';
import { map } from 'rxjs';
declare const M: any;

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit, AfterViewInit {
  employee!: Employee;
  privilegeList: EmployeePrivilege[] = [];
  empPrivileges: number[] = [];

  constructor(private http: EmployeeService, private location: Location, private route: ActivatedRoute) { }

  ngAfterViewInit(): void {
    var options = {
      isMultiple: true,
    };
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  }

  ngOnInit(): void {
    this.http.getPriveleges().subscribe((prv) => (this.privilegeList = prv));
    this.http.getEmployee(this.route.snapshot.paramMap.get('id') || '0').pipe(
      map(res => {
        this.employee = res;
        if (this.employee.roles != undefined) {
          this.employee.roles.forEach(element => {
            this.empPrivileges.push(element.epvId);
          });
        }
      })).subscribe();
  }

  resetPassword(): void {
    this.http.getForgotPassword(this.employee.empEmail).subscribe();
    Swal.fire({
      icon: 'success',
      title: 'Done',
      text: 'New password has been sent to employee email address'
    });
    return;
  }

  updateEmployee(): void {
    let sending = this.employee as unknown as EmployeeEdit;
    this.http.putEmployee(this.employee.empId, sending).pipe(
      map(res => {
        if (res.statusCode == 200) {
          this.http.putEmployeePrivileges(this.employee.empId, this.empPrivileges).subscribe();
          this.returnButtonClick();
        }
      })
    ).subscribe();
  }

  returnButtonClick(): void {
    this.location.back();
  }

  employeePrivilegesAdd(id: number): void {
    this.empPrivileges.push(id);
  }

  employeePrivilegesRemove(id: number): void {
    this.empPrivileges = this.empPrivileges.filter(a => a != id);
  }
}
