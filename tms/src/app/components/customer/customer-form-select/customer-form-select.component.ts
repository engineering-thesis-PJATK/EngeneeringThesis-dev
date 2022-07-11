import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Company, CompanySelection } from 'src/app/models/company';


@Component({
  selector: 'app-customer-form-select',
  templateUrl: './customer-form-select.component.html',
  styleUrls: ['./customer-form-select.component.scss']
})
export class CustomerFormSelectComponent implements OnInit, AfterViewInit {
  @Input() companyList: CompanySelection[] = [];
  @Output() selectedCompanyId = new EventEmitter<number>();
  //lista: test[] = [];
  constructor() {
    
   }

  ngAfterViewInit(): void {
    var elems2 = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems2, {});
  }

  ngOnInit(): void {
    
  }

  onChange(id: number, event: any) {
    this.companyList.forEach(element => {
      if(element.company.cmpId == id) {
        element.selected = event.currentTarget.checked;
        this.selectedCompanyId.emit(id);
      } else {
        element.selected = false;
      }
    });
  } 
}
