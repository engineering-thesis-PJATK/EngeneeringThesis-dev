import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Datepicker } from "materialize-css";
import { ActivatedRoute } from '@angular/router';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { Location } from '@angular/common';
import { SingleTicketJoined } from 'src/app/models/ticket';
import Swal from 'sweetalert2';
import { map, Observable } from 'rxjs';

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
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {
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
   
  ticket!: Observable<SingleTicketJoined>;
  constructor(private httpTicketSvc: TicketService, private route: ActivatedRoute) {   
    let param1 = this.route.snapshot.paramMap.get('id') || '0';        
    this.ticket =this.httpTicketSvc.getCustomJoinedSingleTicket(param1);  

  }  


  ngAfterViewInit(): void {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, {});
       elems = document.querySelectorAll('.datepicker');
      instances = M.Datepicker.init(elems, {});      
  }
  ngOnInit(): void {}
  
}
