import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { timeEntryHeader, timeEntryReport } from 'src/app/models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }
  getDataForReport(EmployeeService: string, DateFrom: Date, DatoTo: Date): Observable<timeEntryReport[]>{
      let reportsData: timeEntryReport[] = [
        {terId: 1, terTicketTitle: "Tytul zgloszenia 1", terDescription: "Opis time entry", terDate: "2022-01-01", terTimeValue: "00:10", terCompany:"Ruch"},
        {terId: 2, terTicketTitle: "Tytul zgloszenia 2", terDescription: "Opis time entry", terDate: "2022-01-01", terTimeValue: "00:20", terCompany:"Ruch"},
        {terId: 3, terTicketTitle: "Tytul zgloszenia 3", terDescription: "Opis time entry", terDate: "2022-01-01", terTimeValue: "00:30", terCompany:"Green"},
        {terId: 4, terTicketTitle: "Tytul zgloszenia 4", terDescription: "Opis time entry", terDate: "2022-01-01", terTimeValue: "00:40", terCompany:"Green"},
      ];
      return of(reportsData);
  }
  getGroupDataForReport(): Observable<timeEntryHeader[]>{
    let reportsData: timeEntryReport[] = [
      {terId: 1, terTicketTitle: "Tytul zgloszenia 1", terDescription: "Opis time entry", terDate: "2022-01-01", terTimeValue: "00:10", terCompany:"Ruch"},
      {terId: 2, terTicketTitle: "Tytul zgloszenia 2", terDescription: "Opis time entry", terDate: "2022-01-01", terTimeValue: "00:20", terCompany:"Ruch"},
      {terId: 3, terTicketTitle: "Tytul zgloszenia 3", terDescription: "Opis time entry", terDate: "2022-01-01", terTimeValue: "00:30", terCompany:"Green"},
      {terId: 4, terTicketTitle: "Tytul zgloszenia 4", terDescription: "Opis time entry", terDate: "2022-01-01", terTimeValue: "00:40", terCompany:"Green"},
    ];
    let reportsData1: timeEntryReport[] = [
      {terId: 1, terTicketTitle: "Tytul zgloszenia 1", terDescription: "Opis time entry", terDate: "2022-01-01", terTimeValue: "00:10", terCompany:"Ruch"},
      {terId: 2, terTicketTitle: "Tytul zgloszenia 2", terDescription: "Opis time entry", terDate: "2022-01-02", terTimeValue: "00:20", terCompany:"Ruch"},
      {terId: 3, terTicketTitle: "Tytul zgloszenia 3", terDescription: "Opis time entry", terDate: "2022-01-02", terTimeValue: "00:30", terCompany:"Green"},
      {terId: 4, terTicketTitle: "Tytul zgloszenia 4", terDescription: "Opis time entry", terDate: "2022-01-02", terTimeValue: "00:40", terCompany:"Green"},
    ];
    let reportsData2: timeEntryReport[] = [
      {terId: 1, terTicketTitle: "Tytul zgloszenia 1", terDescription: "Opis time entry", terDate: "2022-01-03", terTimeValue: "00:10", terCompany:"Ruch"},
      {terId: 2, terTicketTitle: "Tytul zgloszenia 2", terDescription: "Opis time entry", terDate: "2022-01-03", terTimeValue: "00:20", terCompany:"Ruch"},
      {terId: 3, terTicketTitle: "Tytul zgloszenia 3", terDescription: "Opis time entry", terDate: "2022-01-03", terTimeValue: "00:30", terCompany:"Green"},
      {terId: 4, terTicketTitle: "Tytul zgloszenia 4", terDescription: "Opis time entry", terDate: "2022-01-03", terTimeValue: "00:40", terCompany:"Green"},
    ];
    let reportsHeaderData: timeEntryHeader[] = [
      {tehId: 1, tehGroupTitle: "2022-01-01", tehGroupTimeSum: "1:40", tehDetails: reportsData},
      {tehId: 2, tehGroupTitle: "2022-01-02", tehGroupTimeSum: "1:40", tehDetails: reportsData1},
      {tehId: 3, tehGroupTitle: "2022-01-03", tehGroupTimeSum: "1:40", tehDetails: reportsData2}
    ]
    return of(reportsHeaderData);
  }
}
