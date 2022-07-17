import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleTicket, TicketList } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { CompanyService } from 'src/app/services/company/company.service'
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})

export class TicketListComponent implements OnInit {
  
  tickets!: Observable<TicketList[]>;
  constructor(private httpTicketSvc: TicketService) {
    this.tickets = this.httpTicketSvc.getCustomTicketList();
  }
  ngOnInit(): void {     
  }

}


