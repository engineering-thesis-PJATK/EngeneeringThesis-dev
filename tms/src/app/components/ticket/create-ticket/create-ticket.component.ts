import { Component, OnInit } from '@angular/core';

import { Datepicker } from "materialize-css";
declare const M: any;
@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})



export class CreateTicketComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    // document.addEventListener('DOMContentLoaded',function(){
  
    //   var elems = document.querySelectorAll('.datepicker');
    //   M.Datepicker.init(elems, []);
     
    // });
  }
}

// document.addEventListener('DOMContentLoaded',function(){
  
//   var elems = document.querySelectorAll('.datepicker');
//   M.Datepicker.init(elems, []);   
// });
