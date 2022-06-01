import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { SingleTicket, TicketList as CustomTicket, SingleTicketJoined as CustomJoinedSingleTicket } from 'src/app/models/ticket';
import { ApiPaths, Environment } from '../environment';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private url = Environment.baseUrl;
  constructor(private http: HttpClient) { }
  getTickets(): Observable<SingleTicket[]>{
    return this.http.get<SingleTicket[]>(this.url + ApiPaths.Ticket).pipe(tap(console.log));
  }

  getCustomTicketList(): Observable<CustomTicket[]>{
    return this.http.get<CustomTicket[]>(this.url + ApiPaths.CustomTicket).pipe(tap(console.log));
  }

  getCustomJoinedSingleTicket(ticketId: string): Observable<CustomJoinedSingleTicket>{
    return this.http.get<CustomJoinedSingleTicket>(this.url + ApiPaths.CustomTicket + '/' + ticketId).pipe(tap(console.log));
  }
}


