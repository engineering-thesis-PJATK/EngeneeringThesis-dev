import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CompanyAddress } from 'src/app/models/companyAddress';


@Component({
  selector: 'app-company-address-list',
  templateUrl: './company-address-list.component.html',
  styleUrls: ['./company-address-list.component.scss']
})
export class CompanyAddressListComponent {

  @Input() addresses!: CompanyAddress[];
  @Output() removeAddress = new EventEmitter<CompanyAddress>();

}
