import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //TODO: double inclusion of materialize library causes visual errors (waves-errors), find another way on dropdown menu
  // ngAfterViewInit() {
  //   setTimeout(() => {
  //       var elems = document.querySelectorAll('.dropdown-trigger');
  //       var instances = M.Dropdown.init(elems, {});
  //       }, 0 );
  //     }

}
