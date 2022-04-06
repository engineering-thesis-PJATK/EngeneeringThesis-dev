import { Component, Input, OnInit } from '@angular/core';
import { CompanyCard } from 'src/app/models/company';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {
  @Input() company: Partial<CompanyCard> = {};
  constructor() { }

  ngOnInit(): void {
  }

}
