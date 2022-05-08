import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Location } from '@angular/common';
import { EmployeeEdit } from 'src/app/models/employee';
import { EmployeePrivilege } from 'src/app/models/employeePrivilege';
import { NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable, switchMap } from 'rxjs';
declare const M: any;

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit, AfterViewInit {
  employee!: Observable<EmployeeEdit>;
  empPrivileges!: EmployeePrivilege[];
  privilegeList: EmployeePrivilege[] = [];
  test!: string;

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
    this.employee = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getEmployee(params.get('id') || '0'))
    );
    // this.empPrivileges = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => this.http.getEmployeePrivileges(params.get('id') || '0'))
    // );
    //const prodId = this.route.snapshot.paramMap.get('id');
    this.http.getEmployeePrivileges(this.route.snapshot.paramMap.get('id') || '0').subscribe((prv) => (this.empPrivileges = prv));
  }

  resetPassword(): void {
    //...
      Swal.fire({
        icon: 'success',
        title: 'Done',
        text: 'New password has been sent to employee email address'
      });
      return;
  }

  isAlredySelected(prv :EmployeePrivilege): boolean {
    let contains = this.empPrivileges.findIndex((item) => item.id === prv.id) >= 0;
    return contains;
  }

  isAdmin(): string {
    //console.log(this.empPrivileges);
    if(this.empPrivileges.findIndex((item) => item.name === 'Admin') >= 0) {
      return 'checked';
    }
    return '';
  }

  updateEmployee(): void {
    //this.http.putEmployee(this.employee as unknown as EmployeeEdit);
    console.log(this.test);
  }

  adminChange() {
    const admin = this.privilegeList.find((item) => item.name == 'Admin');
    if(this.empPrivileges.findIndex((item) => item.name == 'Admin') < 0) {
      this.empPrivileges.push(admin as EmployeePrivilege);
    }
    else
    {
      this.empPrivileges = this.empPrivileges.filter((item) => item.name != 'Admin');
    }
    this.isAdmin();
  }

  returnButtonClick(): void {
    this.location.back();
  }

  print(any: NgModel) {
    console.log(any);
  }
}
