import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleTicket } from 'src/app/models/ticket';
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
  singleTicket: SingleTicket;
  singleCustomer: Customer;
  singleCompany: CompanyCard;
}

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})

export class TicketListComponent implements OnInit {
  deserializedJsonData = '';
  tickets!: SingleTicket[];
  company!: CompanyCard;
  customer!: Customer;
  listOfEntities!: IListOfEntities[];

  // ticketss: Ticket[] = [
  //   { id: 1, name: "#1", topic: "Please fix it asap!!!!!", description: "System is not working propperly", company: companyObject, email: "jakub.Michalak@iq200.com.pl" },
  //   { id: 2, name: "#2", topic: "Update report", description: "Please update localization occupiance per day report. Please add EAN field", company: companyObject, email: "tomasz.Krasienko@iq200.com.pl" },
  //   { id: 3, name: "#3", topic: "No connection to main server", description: "Hello Im Getting error Object Reference not set to instance of an object", company: companyObject, email: "Rajesh.Marakesh@indiahelp.com" },
  //   { id: 4, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
  //   { id: 5, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
  //   { id: 6, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
  //   { id: 7, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
  //   { id: 8, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
  //   { id: 9, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
  //   { id: 10, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
  //   { id: 11, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
  //   { id: 12, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
  //   { id: 13, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
  //   { id: 14, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
  //   { id: 15, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
  // ]
  //{"ticId":1,"ticName":"#1","ticTopic":"BLAD SYSTEMU! NIC NIE DZIALA!!!!!!!",
  //"ticEstimatedCost":150,"ticDueDate":"2021-10-07T00:00:00",
  //"ticCompletedAt":"2021-10-07T00:00:00","ticCreatedAt":"2021-10-07T00:00:00",
  //"ticDescription":"","ticTicketStatusId":3,"ticCustomerId":2,"ticTicketTypeId":1,"ticTicketPriorityId":1},

  constructor(private httpTicketSvc: TicketService, private httpCompanySvc: CompanyService, private httpCustomerSvc: CustomerService) {
    this.httpTicketSvc.getTickets().subscribe(tickets => this.tickets = tickets as SingleTicket[]);
    
    alert(JSON.stringify(this.tickets))
    this.buildListOfEntities(this.tickets);
  }
  getCompanyById(companyId: number) {
     this.httpCompanySvc.getCompanyById(companyId).subscribe(company => this.company = company as CompanyCard);
  }
  getCustomerById(customerId: number) {
     this.httpCustomerSvc.getCustomerById(customerId).subscribe(customer => this.customer = customer as Customer);
  }
  buildListOfEntities(tickets: SingleTicket[]) {    
    tickets.forEach(ticket => {
      this.getCustomerById(ticket.ticCustomerId)
      this.getCompanyById(this.customer.cur_idCompany)

      var entity = { singleTicket: ticket, singleCustomer: this.customer , singleCompany: this.company }
      alert(entity)
      this.listOfEntities.push(entity)
    });
  }

  ngOnInit(): void {     
  }

}


