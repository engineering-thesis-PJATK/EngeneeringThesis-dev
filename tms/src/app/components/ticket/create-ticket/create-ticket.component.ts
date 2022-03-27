import { Component, OnInit } from '@angular/core';
//import $ from 'jquery'
import { Datepicker } from "materialize-css";
declare const M: any;

interface Employee {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})



export class CreateTicketComponent implements OnInit {
  employees: Employee[] = [
    {value: '0', viewValue: 'Krzysztof Jurkowski'},
    {value: '1', viewValue: 'Piotr Łojko'},
    {value: '2', viewValue: 'Tomasz Krasieńko'},
    {value: '3', viewValue: 'Jakub Michalak'},
    {value: '4', viewValue: 'Paweł Lenkiewicz'}
  ];
  
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
// $(document).ready(function() {
//   $('input#input_text, textarea#textarea2').characterCounter();
// });
