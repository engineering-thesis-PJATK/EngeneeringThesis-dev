import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeePrivilege } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-edit-select',
  templateUrl: './employee-edit-select.component.html',
  styleUrls: ['./employee-edit-select.component.scss']
})
export class EmployeeEditSelectComponent implements OnInit, AfterViewInit {

  @Input() privilegeList!: EmployeePrivilege[];
  @Input() currentPrivileges!: number[];
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

  currentChecked(privilege: EmployeePrivilege): string {
    if(this.currentPrivileges.filter(e => e == privilege.epvId).length > 0) {
      return 'checked';
    } else {
      return '';
    }
  }
}