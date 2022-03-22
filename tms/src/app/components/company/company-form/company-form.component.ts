
import { Component, OnInit, Output } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyAddress } from 'src/app/models/companyAddress';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})

export class CompanyFormComponent implements OnInit {

  company: Company = { companyName: '', nipPrefix: '', nip: '', landLine: '', companyAddresses: [] };

  constructor() {
  }

  ngOnInit(): void {
  }

  onNewAddress(address: CompanyAddress) {
    this.company.companyAddresses.push(address);
  }

  onDeleteAddress(address: CompanyAddress) {
    this.company.companyAddresses = this.company.companyAddresses.filter(item => item !== address);
  }

}
