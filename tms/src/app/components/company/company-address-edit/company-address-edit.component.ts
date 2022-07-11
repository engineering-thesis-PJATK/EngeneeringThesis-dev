import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyAddress } from 'src/app/models/companyAddress';
import { CompanyService } from 'src/app/services/company/company.service';
import { Location } from '@angular/common';
import { Company } from 'src/app/models/company';
import { map } from 'rxjs';
declare const M: any;

@Component({
  selector: 'app-company-address-edit',
  templateUrl: './company-address-edit.component.html',
  styleUrls: ['./company-address-edit.component.scss']
})
export class CompanyAddressEditComponent implements OnInit, AfterViewInit {
  // @Output() updateAddress = new EventEmitter<CompanyAddress>();
  // @Input() address!: CompanyAddress;
  firstEdit = true;
  selectedAnyAddress = false;
  editedAddress: Partial<CompanyAddress> = {};
  newAddress: Partial<CompanyAddress> = {};
  addresses!: CompanyAddress[];
  company!: Company;
  constructor(private http: CompanyService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAddresses();
    this.http.getCompany(this.route.snapshot.paramMap.get('id') || '0').subscribe((cmp) => (this.company = cmp));
  }

  ngAfterViewInit(): void {
    this.initCollapsible();
  }


  getAddresses() {
    this.http.getCompanyAddresses(this.route.snapshot.paramMap.get('id') || '0').subscribe(adr => this.addresses = adr);
  }
  
  initCollapsible() {
    var elems = document.querySelectorAll('.collapsible');
    var options = {
      inDuration: 500,
      outDuration: 500
    }
    var instances = M.Collapsible.init(elems, options);
  }


  addAddress() {
    //this.updateAddress.emit(this.address);
    this.http.postCompanyAddress(this.company.cmpId || 0, this.newAddress as CompanyAddress).pipe(
      map(res => {
        if(res.statusCode == 200) {
          this.getAddresses();
          this.hideAddAddressSection();
        }
      })
    ).subscribe();
  }

  hideAddAddressSection() {
    var elem = document.querySelector('.adr-summary');
    var instance = M.Collapsible.getInstance(elem);
    instance.close(1);
    instance.open(0);
  }
  
  removeAddress(address: CompanyAddress) {
    this.http.deleteCompanyAddress(address.adrId).subscribe();
    this.getAddresses();
  }

  updateAddress() {
    //this.http.putCompanyAddress(this.editedAddress as CompanyAddress).subscribe();
    this.http.putCompanyAddress(this.editedAddress as CompanyAddress).pipe(
      map(res =>{
        if(res.statusCode == 200) {
          this.cancelEdit();
          this.getAddresses();
        }
      })
    ).subscribe();
  }

  setAddress(address: CompanyAddress) {
    this.selectedAnyAddress = true;
    //http update address
    var elem = document.querySelector('.adr-edit');
    var instance = M.Collapsible.getInstance(elem);
    instance.close(0);
    if(this.firstEdit) {
      instance.open(0);
      this.editedAddress = Object.assign({}, address);//copy without ref
    } else {
      setTimeout(() => 
      {
        instance.open(0);
        this.editedAddress = Object.assign({}, address);
      },
      500);
    }
    
    this.firstEdit = false;
  }

  cancelEdit(): void {
    var elem = document.querySelector('.adr-edit');
    var instance = M.Collapsible.getInstance(elem);
    instance.close(0);
    this.firstEdit = true;
  }

  // onNewAddress(address: CompanyAddress) {
  //   //http.addAddress
  //   this.addresses.push(address);
  // }
}
