import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeePrivilege } from 'src/app/models/employeePrivilege';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Location } from '@angular/common'
import { FormSelect } from 'materialize-css';
declare const M: any;

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  privilegeList!: Observable<EmployeePrivilege[]>;

  constructor(private http: EmployeeService, private location: Location) { }

  ngOnInit(): void {
    this.privilegeList = this.http.getPriveleges();
  }

  returnButtonClick() {
    this.location.back();
  }

}

document.addEventListener('DOMContentLoaded', function() {
  var options = {
    isMultiple: true,
    closeOnClick: false,
    not: 'disabled'
  }
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems,options);
});