import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyAddress } from 'src/app/models/companyAddress';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  company!: Company;
  addresses!: CompanyAddress[];
  constructor(private http: CompanyService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.getCompany(this.route.snapshot.paramMap.get('id') || '0').subscribe((cmp) => (this.company = cmp));
    this.http.getCompanyAddresses(this.route.snapshot.paramMap.get('id') || '0').subscribe((adr) => (this.addresses = adr));
  }

  returnButtonClick() {
    this.location.back();
  }


}
