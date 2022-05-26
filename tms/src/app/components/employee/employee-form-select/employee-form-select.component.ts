import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeePrivilege } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-form-select',
  templateUrl: './employee-form-select.component.html',
  styleUrls: ['./employee-form-select.component.scss']
})
export class EmployeeFormSelectComponent implements OnInit, AfterViewInit {

  @Input() privilegeList!: EmployeePrivilege[];
  @Output() addPrivilege = new EventEmitter<number>();
  @Output() removePrivilege = new EventEmitter<number>();
  constructor() { }
  ngAfterViewInit(): void {
    var elems2 = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems2, {});
  }

  ngOnInit(): void {
  }

  privilegeChecked(id: number, event: any) {
    var isChecked = event.currentTarget.checked;
    if(isChecked) {
      this.addPrivilege.emit(id);
    } else {
      this.removePrivilege.emit(id);
    }
  }
}