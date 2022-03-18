import { Component, Input, OnInit } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  @Input()
  searcher!: SearchComponent;
  showFiller = false;
  isExpanded: boolean = false;

  //TODO: double inclusion of materialize library causes visual errors (waves-errors), find another way on dropdown menu
  // ngAfterViewInit() {
  //   setTimeout(() => {
  //       var elems = document.querySelectorAll('.dropdown-trigger');
  //       var instances = M.Dropdown.init(elems, {});
  //       }, 0 );
  //     }

}
