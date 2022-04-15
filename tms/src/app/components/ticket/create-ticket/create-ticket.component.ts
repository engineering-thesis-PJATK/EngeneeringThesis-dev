import { Component, OnInit } from '@angular/core';
//import $ from 'jquery'
import { Datepicker } from "materialize-css";
declare const M: any;

interface Employee {
  value: number;
  viewValue: string;
}
interface Priority{
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})



export class CreateTicketComponent implements OnInit {
  employees: Employee[] = [
    {value: 0, viewValue: 'Krzysztof Jurkowski'},
    {value: 1, viewValue: 'Piotr Łojko'},
    {value: 2, viewValue: 'Tomasz Krasieńko'},
    {value: 3, viewValue: 'Jakub Michalak'},
    {value: 4, viewValue: 'Paweł Lenkiewicz'}
  ];

  priorities: Priority[] = [
    {value: 0, viewValue: "Urgent"},
    {value: 1, viewValue: "Important"},
    {value: 2, viewValue: "Basic"},
    {value: 3, viewValue: "Not Important"},
  ]
   
  constructor() {}
  ngAfterViewInit(): void {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, {});
       elems = document.querySelectorAll('.datepicker');
      instances = M.Datepicker.init(elems, {});
  }
  ngOnInit(): void {}
}
