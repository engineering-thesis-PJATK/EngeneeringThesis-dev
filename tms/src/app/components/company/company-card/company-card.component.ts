import { Component, Input, OnInit } from '@angular/core';
import { CompanySimple } from 'src/app/models/companySimple';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {
  @Input() company: CompanySimple = {id: 0, companyName: '', city: '', country: ''};
  constructor() { }

  ngOnInit(): void {
  }

}
