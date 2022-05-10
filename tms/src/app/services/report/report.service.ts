import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { timeEntryReport } from 'src/app/models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }
  getDataForReport(EmployeeService: string, DateFrom: Date, DatoTo: Date): Observable<timeEntryReport[]>{
      let reportsData: timeEntryReport[] = [
        {terId: 1, terTicketTitle: "Tytul zgloszenia 1", terDescription: "Opis time entry", terDate: new Date("2022-01-01"), terTimeValue: "00:10", terCompany:"Ruch"},
        {terId: 2, terTicketTitle: "Tytul zgloszenia 2", terDescription: "Opis time entry", terDate: new Date("2022-01-01"), terTimeValue: "00:20", terCompany:"Ruch"},
        {terId: 3, terTicketTitle: "Tytul zgloszenia 3", terDescription: "Opis time entry", terDate: new Date("2022-01-01"), terTimeValue: "00:30", terCompany:"Green"},
        {terId: 4, terTicketTitle: "Tytul zgloszenia 4", terDescription: "Opis time entry", terDate: new Date("2022-01-01"), terTimeValue: "00:40", terCompany:"Green"},
      ];
      return of(reportsData);
  }
}
