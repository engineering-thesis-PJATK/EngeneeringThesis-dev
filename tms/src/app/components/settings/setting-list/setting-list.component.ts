import { Component, OnInit } from '@angular/core';

interface Employee {
  name: string;
  surname: string;
  phone: string;
  email: string;
  company: string;
  designation: string;
  description: string;
}

@Component({
  selector: 'app-setting-list',
  templateUrl: './setting-list.component.html',
  styleUrls: ['./setting-list.component.scss']
})
export class SettingListComponent implements OnInit {
   singleEmployee : Employee  = 
  {
    name: "Piotr",
    surname: "Lojko",
    phone: "+48 511 069 966",
    email: "piotr.lojko@credit-suisse.com",
    company: "Credit Suisse",
    designation: "Software Engineer",
    description: "New Joiner, IQ200 team misses him already, but what you gonna do.",
  }

  constructor() { }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }

}
