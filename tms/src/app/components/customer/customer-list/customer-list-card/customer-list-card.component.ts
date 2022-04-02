import { Component, Input, OnInit } from '@angular/core';
import { CustomerCompany } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-list-card',
  templateUrl: './customer-list-card.component.html',
  styleUrls: ['./customer-list-card.component.scss'],
})
export class CustomerListCardComponent implements OnInit {
  @Input() customer: CustomerCompany = {
    cur_id: 0,
    cur_name: '',
    cur_surname: '',
    cur_email: '',
    cur_position: '',
    cur_comments: '',
    cur_idCompany: 0,
    cmp_name: '',
    cur_phoneNumber: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
