import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyAddress } from 'src/app/models/companyAddress';
import { CompanyService } from 'src/app/services/company/company.service';
import { Location } from '@angular/common';
declare const M: any;

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit, AfterViewInit {

  company!: Company;
  addresses!: CompanyAddress[];
  editedAddress!: CompanyAddress;
  firstEdit = true;
  constructor(private http: CompanyService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.getCompany(this.route.snapshot.paramMap.get('id') || '0').subscribe((cmp) => (this.company = cmp));
    this.getAddresses();
  }

  ngAfterViewInit(): void {
    this.initCollapsible();
  }

  //TODO: coś jest nie tak z collapsiblem - do weryfikacji
  initCollapsible() {
    var elems = document.querySelectorAll('.collapsible');
    var options = {
      inDuration: 500,
      outDuration: 500
    }
    var instances = M.Collapsible.init(elems, options);
  }

  returnButtonClick() {
    this.location.back();
  }

  updateCompany() {

  }

  removeAddress(address: CompanyAddress) {
    //http remove address
  }

  setAddress(address: CompanyAddress) {
    //http update address
    var elem = document.querySelector('.emp-edit');
    var instance = M.Collapsible.getInstance(elem);
    instance.close(0);
    if(this.firstEdit) {
      instance.open(0);
      this.editedAddress = address;
    } else {
      setTimeout(() => 
      {
        instance.open(0);
        this.editedAddress = address;
      },
      500);
    }
    
    this.firstEdit = false;
  }

  onNewAddress(address: CompanyAddress) {
    //http.addAddress
    this.addresses.push(address);
  }

  onUpdateAddress(address: CompanyAddress) {
    
  }

  getAddresses() {
    this.http.getCompanyAddresses(this.route.snapshot.paramMap.get('id') || '0').subscribe((adr) => (this.addresses = adr));
  }

}
