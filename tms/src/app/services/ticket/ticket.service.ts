import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { SingleTicket, TicketList as CustomTicket } from 'src/app/models/ticket';
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
    return this.http.get<CustomTicket[]>(this.url + ApiPaths.CustomTicket).pipe(tap(console.log));}
  // getWaitingTicketsForKanBan(): Observable<TicketKanBan[]>{
  //     //return this.http.get<TicketKanBan[]>(this.url + ApiPaths.Ticket).pipe(tap(console.log));
  //     let waitingTickets: TicketKanBan[] = [
  //       { ticId:1, ticName: '#0001', ticTopic:'Description of task 1', ticDueDate:'01-01-2022'},
  //       { ticId:2, ticName: '#0002', ticTopic:'Description of task 2', ticDueDate:'01-01-2022'},
  //       { ticId:3, ticName: '#0003', ticTopic:'Description of task 3', ticDueDate:'01-01-2022'},
  //     ]
  //     return of(waitingTickets);
  // }
  // getOpenTicketsForKanBan(): Observable<TicketKanBan[]>{
  //     //return this.http.get<TicketKanBan[]>(this.url + ApiPaths.Ticket).pipe(tap(console.log));
  //     let waitingTickets: TicketKanBan[] = [
  //       { ticId:1, ticName: '#0004', ticTopic:'Description of task 4', ticDueDate:'01-01-2022'},
  //       { ticId:2, ticName: '#0005', ticTopic:'Description of task 5', ticDueDate:'01-01-2022'},
  //       { ticId:3, ticName: '#0006', ticTopic:'Description of task 6', ticDueDate:'01-01-2022'},
  //     ]
  //     return of(waitingTickets);
  // }
  // getDoneTicketsForKanBan(): Observable<TicketKanBan[]>{
  //   //return this.http.get<TicketKanBan[]>(this.url + ApiPaths.Ticket).pipe(tap(console.log));
  //   let waitingTickets: TicketKanBan[] = [
  //     { ticId:1, ticName: '#0007', ticTopic:'Description of task 7', ticDueDate:'01-01-2022'},
  //     { ticId:2, ticName: '#0008', ticTopic:'Description of task 8', ticDueDate:'01-01-2022'},
  //     { ticId:3, ticName: '#0009', ticTopic:'Description of task 9', ticDueDate:'01-01-2022'},
  //   ]
  //   return of(waitingTickets);
  //}
}


