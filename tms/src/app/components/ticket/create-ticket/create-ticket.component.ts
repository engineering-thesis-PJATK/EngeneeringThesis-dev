import { Component, OnInit } from '@angular/core';
import $ from 'jquery'
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
interface Status{
  id: number;
  viewValue: string;
}
interface TicketType{
  id: number;
  viewValue: string;
}

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})



export class CreateTicketComponent implements OnInit {
ticketTypes: TicketType[] = [
  {id: 0, viewValue: "Budget"},
  {id: 1, viewValue: "Analysis"},
  {id: 2, viewValue: "Own Cost"}
]

statuses: Status[] = [
  {id: 0, viewValue: "In Progress"},
  {id: 1, viewValue: "Finished"},
  {id: 2, viewValue: "Created"},
  {id: 3, viewValue: "Waiting for customer"},
  {id: 4, viewValue: "Waiting for third party"},
]

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
  ngOnInit(): void {}
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems,{});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, {});
});

