import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleTicket, TicketList } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket/ticket.service';
import { CompanyService } from 'src/app/services/company/company.service'
import { CompanyCard } from 'src/app/models/company';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

interface Company_old {
  id: number;
  name: string;
  nip: string;
  nipPrefix: string;
  regon: number;
  krsNumber: number;
  landline: string;
}
interface IListOfEntities {
  singleTicket: Observable<SingleTicket>;
  singleCustomer: Observable<Customer>;
  singleCompany: Observable<CompanyCard>;
}

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})

export class TicketListComponent implements OnInit {
  
  tickets!: Observable<TicketList[]>;
  constructor(private httpTicketSvc: TicketService, private httpCompanySvc: CompanyService, private httpCustomerSvc: CustomerService) {
    this.tickets = this.httpTicketSvc.getCustomTicketList();
  }
  ngOnInit(): void {     
  }

}


