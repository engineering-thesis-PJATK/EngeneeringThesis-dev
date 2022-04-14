import { Component, OnInit } from '@angular/core';

interface Company {
  id: number;
  name: string;
  nip: string;
  nipPrefix: string;
  regon: number;
  krsNumber: number;
  landline: string;
}
interface Ticket {
  id: number;
  name: string;
  topic: string;
  description: string;
  company: Company;
  email: string;
}
const companyObject: Company = {
  id: 1,
  name: "PJATK",
  nip: "951-182-36-06",
  nipPrefix: "PL",
  regon: 12312786132,
  krsNumber: 12776913,
  landline: "577 200 486",
};
@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})

export class TicketListComponent implements OnInit {

  tickets: Ticket[] = [
    { id: 1, name: "#1", topic: "Please fix it asap!!!!!", description: "System is not working propperly", company: companyObject, email: "jakub.Michalak@iq200.com.pl" },
    { id: 2, name: "#2", topic: "Update report", description: "Please update localization occupiance per day report. Please add EAN field", company: companyObject, email: "tomasz.Krasienko@iq200.com.pl" },
    { id: 3, name: "#3", topic: "No connection to main server", description: "Hello Im Getting error Object Reference not set to instance of an object", company: companyObject, email: "Rajesh.Marakesh@indiahelp.com" },
    { id: 4, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
    { id: 5, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
    { id: 6, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
    { id: 7, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
    { id: 8, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
    { id: 9, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
    { id: 10, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
    { id: 11, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
    { id: 12, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
    { id: 13, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
    { id: 14, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },
    { id: 15, name: "#4", topic: "People are dying here!", description: "Hello i have problem with printout 'Obieg ZS'", company: companyObject, email: "aneczka.Manudis@tlen.pl" },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
