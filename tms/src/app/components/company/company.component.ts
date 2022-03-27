import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanySimple } from 'src/app/models/companySimple';
import { CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companies!: Observable<CompanySimple[]>;
  constructor(private http: CompanyService) { }

  ngOnInit(): void {
    this.companies = this.http.getCompanies();
  }

}
