import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companies!: Company[];
  constructor(private http: CompanyService) { }

  ngOnInit(): void {
    //this.companies = this.http.getCompanies();
    this.http.getCompanies().subscribe(cmps => this.companies = cmps);
  }

  getCompanies() {
    this.http.getCompanies().subscribe(cmps => this.companies = cmps);
  }

}
