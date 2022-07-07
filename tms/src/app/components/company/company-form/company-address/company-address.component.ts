import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CompanyAddress } from 'src/app/models/companyAddress';

@Component({
  selector: 'app-company-address',
  templateUrl: './company-address.component.html',
  styleUrls: ['./company-address.component.scss']
})
export class CompanyAddressComponent implements OnInit {
  @Output() newAddress = new EventEmitter<CompanyAddress>();

  address: CompanyAddress = {
    adrTown: '', adrStreet: '', adrStreetNumber: '', adrPostCode: '', adrCountry: '',
    adrId: 0,
    adrIdCompany: 0
  };
  constructor() { }

  ngOnInit(): void {
  }

  addAddress() {
    this.newAddress.emit(this.address);
    this.address = { adrTown: '', adrStreet: '', adrStreetNumber: '', adrPostCode: '', adrCountry: '',
    adrId: 0,
    adrIdCompany: 0 };
  }
}
