import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanySelect } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company/company.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Location } from '@angular/common';
import { FormSelect } from 'materialize-css';
import { CustomerSend } from 'src/app/models/customer';
declare const M: any;

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit, AfterViewInit {
  companyList!: Observable<CompanySelect[]>;
  customer: Partial<CustomerSend> = {};
  constructor(
    private httpCustomer: CustomerService,
    private httpCompany: CompanyService,
    private location: Location
  ) {}
  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  }

  ngOnInit(): void {
    this.companyList = this.httpCompany.getCompaniesSelect();
  }

  returnButtonClick() {
    this.location.back();
  }

  addCustomer()
  {

  }
}

// document.addEventListener('DOMContentLoaded', function () {
//   var elems = document.querySelectorAll('select');
//   var instances = M.FormSelect.init(elems, {});
// });
