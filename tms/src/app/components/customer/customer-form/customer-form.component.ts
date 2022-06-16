import { AfterViewInit, Component, OnInit } from '@angular/core';
import { last, Observable } from 'rxjs';
import { Company,test } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company/company.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Location } from '@angular/common';
import { FormSelect } from 'materialize-css';
import { CustomerSend } from 'src/app/models/customer';
import Swal from 'sweetalert2';
declare const M: any;

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit, AfterViewInit {
  companyList: Company[] = [];
  companyTest: test[] = [];
  customer: Partial<CustomerSend> = {};
  companyId : number = 0;
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
    //this.httpCompany.getCompanies().pipe(last()).subscribe((cmp) => (this.companyList = cmp));
    this.httpCompany.getCompanies().pipe(last()).subscribe((cmp) => (cmp.forEach(element => {
      this.companyTest.push({selected: false, company: element})
    })));
    console.log(this.companyTest);
  }

  returnButtonClick() {
    this.location.back();
  }

  setCompanyId(id: number) {
    this.companyId = id;
  }

  addCustomer()
  {
    if(this.companyId == 0) {
      Swal.fire({
        title: 'Oops...',
        icon: 'error',
        text: `Select company`
      });
      return;
    }
    this.httpCustomer.postCustomer(this.customer as CustomerSend, this.companyId).subscribe();
  }
}