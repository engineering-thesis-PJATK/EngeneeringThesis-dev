import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeePrivilege } from 'src/app/models/employeePrivilege';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Location } from '@angular/common';
import { FormSelect } from 'materialize-css';
import { EmployeeSend } from 'src/app/models/employee';
import { NgModel } from '@angular/forms';
declare const M: any;

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit, AfterViewInit {
  employee: EmployeeSend = {empLogin: '', empEmail: '', empName: '', empPrivileges: [], empSurname: '', empPassword: '',empPhoneNumber:''};

  privilegeList: EmployeePrivilege[] = [];

  constructor(private http: EmployeeService, private location: Location) {}
  ngAfterViewInit(): void {
    var options = {
      isMultiple: true,
    };
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  }

  ngOnInit(): void {
    //this.privilegeList = this.http.getPriveleges();
    this.http.getPriveleges().subscribe((prv) => (this.privilegeList = prv));
  }

  returnButtonClick() {
    this.location.back();
  }

  addEmployee() {
    console.log(this.employee);
    //this.http.postEmployee(this.employee as unknown as EmployeeSend);
  }

  print(any: NgModel) {
    console.log(any);
  }
}

//regexy na hasła
//conajmniej 1 mała litera, conajmniej 0 dużych, 1 cyfra i jeden znak specjalny
//^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$

//1+ mała, 1+ duża, 1+ cyfra, 1+ znak
//^(?=(.*[A-Z]){1,})(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$

//do testów można wyłączyć i zostawić 1+ litera, 0+ cyfry, 0+ znaki specjalne
//^(?=.*?[a-zA-Z])(?=(.*?[\d]){0,})(?=(.*?[\W]){0,})(?!.*\s).{8,}$
