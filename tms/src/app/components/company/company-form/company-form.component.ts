
import { Component, OnInit, Output } from '@angular/core';
import { CompanySend } from 'src/app/models/company';
import { CompanyAddress } from 'src/app/models/companyAddress';
import { CompanyService } from 'src/app/services/company/company.service';
import { Location } from '@angular/common'
import { map } from 'rxjs';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})

export class CompanyFormComponent implements OnInit {

  company: CompanySend = { cmpName: '', cmpNipPrefix: '', cmpNip: '', cmpLandLine: '' };
  companyAddresses: CompanyAddress[] = [];

  constructor(private companyService: CompanyService,private location: Location) {
  }

  ngOnInit(): void {
  }

  onNewAddress(address: CompanyAddress) {
    this.companyAddresses.push(address);
  }

  onDeleteAddress(address: CompanyAddress) {
    this.companyAddresses = this.companyAddresses.filter(item => item !== address);
  }

  addCompany() {
    console.log(this.companyAddresses);
    this.companyService.postCompany(this.company).pipe(
      map(res => {
          if(res.statusCode == 200){
            console.log(res.objectId);
              this.companyAddresses.forEach(address => {
                console.log(address);
                this.companyService.postCompanyAddress(res.objectId,address).pipe(
                  map(res => {
                    if(res.statusCode != 200) {
                      console.log('error' + res.statusCode);
                    }
                  })
                  ).subscribe();
                });
                this.returnButtonClick();
          }})).subscribe();
  }

  returnButtonClick() {
    this.location.back();
  }


}
