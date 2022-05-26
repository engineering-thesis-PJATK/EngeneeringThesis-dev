import { AfterViewInit, Component, OnInit } from '@angular/core';
import { last, map, Observable } from 'rxjs';
import { EmployeePrivilege } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Location } from '@angular/common';
import { FormSelect } from 'materialize-css';
import { EmployeeNew } from 'src/app/models/employee';
import { NgModel } from '@angular/forms';
import { ReponseModel } from 'src/app/models/reponse';
declare const M: any;

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit, AfterViewInit {
  employee: EmployeeNew = {empEmail: '', empName: '', empSurname: '', empPassword: '',empPhoneNumber:''};
  privilegeList!: EmployeePrivilege[];
  employeePrivileges: number[] = [];

  constructor(private http: EmployeeService, private location: Location) {}
  ngAfterViewInit(): void {
    
    var options = {
      isMultiple: true,
    };
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  }

  ngOnInit(): void {
    this.http.getPriveleges().pipe(last()).subscribe((prv) => (this.privilegeList = prv));
    //this.privilegeList = this.http.getPriveleges();
  }

  returnButtonClick() {
    this.location.back();
  }

  addEmployee() {
    console.log(this.employee);
    //let result = this.http.postEmployee(this.employee).subscribe();
    this.http.postEmployee(this.employee).pipe(
      map(res => {
          if(res.statusCode == 200){
            this.http.postEmployeePrivileges(res.objectId,this.employeePrivileges).subscribe();
            this.returnButtonClick();
          }})).subscribe();
  }

  employeePrivilegesAdd(id: number) {
    this.employeePrivileges.push(id);
  }

  employeePrivilegesRemove(id: number) {
    this.employeePrivileges = this.employeePrivileges.filter(a => a != id);
  }

}

//regexy na hasła
//conajmniej 1 mała litera, conajmniej 0 dużych, 1 cyfra i jeden znak specjalny
//^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$

//1+ mała, 1+ duża, 1+ cyfra, 1+ znak
//^(?=(.*[A-Z]){1,})(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$

//do testów można wyłączyć i zostawić 1+ litera, 0+ cyfry, 0+ znaki specjalne
//^(?=.*?[a-zA-Z])(?=(.*?[\d]){0,})(?=(.*?[\W]){0,})(?!.*\s).{8,}$
