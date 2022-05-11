import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Location } from '@angular/common';
import { CompanyService } from 'src/app/services/company/company.service';
import { CompanySelect } from 'src/app/models/company';
import { Customer } from 'src/app/models/customer';
import { firstValueFrom, Observable, switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
declare const M: any;

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit, AfterViewInit {

  companyList!: Observable<CompanySelect[]>;
  customer!: Observable<Partial<Customer>>;
  
  constructor( private http: CustomerService,
    private httpCompany: CompanyService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  }

  ngOnInit(): void {
    this.customer = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.http.getCustomer(params.get('id') || '0'))
    );
    this.companyList = this.httpCompany.getCompaniesSelect();
  }

  returnButtonClick() {
    this.location.back();
  }

  async updateCustomer() {
    let customer = await firstValueFrom(this.customer);
    this.http.putCustomer(customer);
  }
}
