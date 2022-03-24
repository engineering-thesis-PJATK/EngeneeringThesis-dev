import { Component, OnInit } from '@angular/core';
//import $ from 'jquery'
import { Datepicker } from "materialize-css";
declare const M: any;

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})



export class CreateTicketComponent implements OnInit {
  
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
