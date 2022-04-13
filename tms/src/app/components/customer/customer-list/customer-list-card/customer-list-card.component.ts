import { Component, Input, OnInit } from '@angular/core';
import { CustomerCompany } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-list-card',
  templateUrl: './customer-list-card.component.html',
  styleUrls: ['./customer-list-card.component.scss'],
})
export class CustomerListCardComponent implements OnInit {
  @Input() customer!: CustomerCompany;
  constructor() {}

  ngOnInit(): void {}
}
