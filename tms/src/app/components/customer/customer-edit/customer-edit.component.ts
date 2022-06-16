import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Location } from '@angular/common';
import { CompanyService } from 'src/app/services/company/company.service';
import { CompanySelect } from 'src/app/models/company';
import { CustomerCompany, CustomerSend } from 'src/app/models/customer';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
declare const M: any;

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit, AfterViewInit {

  companyList!: CompanySelect[];
  customer!: CustomerCompany;
  
  constructor( private http: CustomerService,
    private httpCompany: CompanyService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  }

  ngOnInit(): void {
    this.http.getCustomer(this.route.snapshot.paramMap.get('id') || '0').pipe(
      map(res => {
        this.customer = res;
      })
      ).subscribe();
    this.httpCompany.getCompaniesSelect().subscribe((cmps) => (this.companyList = cmps));
  }

  returnButtonClick(): void {
    this.location.back();
  }

  updateCustomer(): void {
    let updatingCustomer = this.customer as unknown as CustomerSend;
    // console.log('customer as customersend');
    // let sending = {} as CustomerSend;
    // sending.curName = this.customer.curName;
    // sending.curSurname = this.customer.curSurname;
    // sending.curEmail = this.customer.curEmail;
    // sending.curPhoneNumber = this.customer.curPhoneNumber;
    // sending.curPosition = this.customer.curPosition;
    // sending.curComments = this.customer.curComments;
    this.http.putCustomer(updatingCustomer,this.customer.curId).pipe(
      map(res => {
        if(res.statusCode == 200) {
          this.returnButtonClick();
        }
      })
    ).subscribe();
  }
}
