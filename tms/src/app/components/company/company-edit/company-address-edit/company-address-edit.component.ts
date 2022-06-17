import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CompanyAddress } from 'src/app/models/companyAddress';

@Component({
  selector: 'app-company-address-edit',
  templateUrl: './company-address-edit.component.html',
  styleUrls: ['./company-address-edit.component.scss']
})
export class CompanyAddressEditComponent implements OnInit {
  @Output() updateAddress = new EventEmitter<CompanyAddress>();
  @Input() address!: CompanyAddress;
  constructor() { }

  ngOnInit(): void {
  }
  
  addAddress() {
    this.updateAddress.emit(this.address);
  }
}
