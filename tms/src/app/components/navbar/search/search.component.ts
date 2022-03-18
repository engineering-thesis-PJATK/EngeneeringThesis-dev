import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  showForm = false;
  
  constructor() { }
  
  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }
  

  ngOnInit(): void {
  }

}
