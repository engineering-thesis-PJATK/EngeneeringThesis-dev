import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company, CompanySend } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company/company.service';
import { Location } from '@angular/common';
import { map } from 'rxjs';
declare const M: any;

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  company!: Company;
  constructor(private http: CompanyService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.getCompany(this.route.snapshot.paramMap.get('id') || '0').subscribe((cmp) => (this.company = cmp));
  }
  returnButtonClick() {
    this.location.back();
  }

  updateCompany() {
    this.http.putCompany(this.company.cmpId || 0, this.company as CompanySend).pipe(
      map(res => {
        if(res.statusCode == 200) {
          this.returnButtonClick();
        }
      })
    ).subscribe();
  }
}
