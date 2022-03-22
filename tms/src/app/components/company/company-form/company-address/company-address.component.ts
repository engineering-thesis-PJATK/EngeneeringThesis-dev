import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CompanyAddress } from 'src/app/models/companyAddress';

@Component({
  selector: 'app-company-address',
  templateUrl: './company-address.component.html',
  styleUrls: ['./company-address.component.scss']
})
export class CompanyAddressComponent implements OnInit {
  @Output() newAddress = new EventEmitter<CompanyAddress>();

  address: CompanyAddress = { city: '', street: '', streetNumber: '', postalCode: '', country: '' };
  constructor() { }

  ngOnInit(): void {
  }

  addAddress() {
    console.log('add address');
    console.log(this.address);
    this.newAddress.emit(this.address);
    this.address = { city: '', street: '', streetNumber: '', postalCode: '', country: '' };
  }
}
