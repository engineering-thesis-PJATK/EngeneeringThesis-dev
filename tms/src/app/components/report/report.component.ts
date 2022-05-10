import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { timeEntryReport } from 'src/app/models/report';
import { ReportService } from 'src/app/services/report/report.service';

declare const M: any;
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @Input() dateInputVisibility: string = "hidden";
  timeEntryData!:Observable<timeEntryReport[]>
  selectedTimePeriod!: string;
  isExpanded: boolean = false;

  constructor(private reportHttp: ReportService) {
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.initDatePicker();
    this.initCollapsible();
  }
  GenerateReport(employee: string, timePeriod: string){
    this.timeEntryData = this.reportHttp.getDataForReport(employee, new Date("2022-01-01"), new Date("2022-02-01"));
    this.closeCollapsableComponent();
  }
  onChange(event: NgModule){
    console.log(event);
    if(event == 7)
    {
      this.dateInputVisibility = "visible";
    }
    else 
    {
      this.dateInputVisibility = "hidden";
    }
    console.log(this.dateInputVisibility);
  }
  initCollapsible(){
    var elems = document.querySelectorAll('.collapsible');
    var options = {
      accordion: true
    }
    var instances = M.Collapsible.init(elems, options);
  }
  initDatePicker(){
    var elems = document.querySelectorAll('select');
    console.log(elems);
    var instances = M.FormSelect.init(elems, {});
    elems = document.querySelectorAll('.datepicker');
    instances = M.Datepicker.init(elems, {});
  }
  closeCollapsableComponent(){
    var elems = document.querySelector('.filters-grouping');
    var instance = M.Collapsible.getInstance(elems);
    console.log("Zamykanie" + instance);
    instance.close(0);
    instance.close(1);
  }
}
