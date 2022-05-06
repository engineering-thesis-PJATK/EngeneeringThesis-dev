import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { Dropdown } from 'materialize-css';
declare const M: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  @Input()
  searcher!: SearchComponent;
  showFiller = false;
  isExpanded: boolean = false;
  
  ngAfterViewInit(): void {

    var options = {
      edge: 'left'
    }
     var elems = document.querySelectorAll('.sidenav');
     var instances = M.Sidenav.init(elems, options);
  }
  //TODO: double inclusion of materialize library causes visual errors (waves-errors), find another way on dropdown menu
  // ngAfterViewInit() {
  //   setTimeout(() => {
  //       var elems = document.querySelectorAll('.dropdown-trigger');
  //       var instances = M.Dropdown.init(elems, {});
  //       }, 0 );
  //     }

}

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.dropdown-trigger');
//   var instances = M.Dropdown.init(elems,{});
// });


