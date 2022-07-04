import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';
import { CustomerCompany } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-list-card',
  templateUrl: './customer-list-card.component.html',
  styleUrls: ['./customer-list-card.component.scss'],
})
export class CustomerListCardComponent implements OnInit {
  @Input() customer!: CustomerCompany;
  @Output() getCustomers = new EventEmitter();
  constructor(private http: CustomerService) {}

  ngOnInit(): void {}

  deleteCustomer()
  {
    Swal.fire({
      title: 'Do you want to delete a customer?',
      showDenyButton: true,
      confirmButtonText: `Yes, I don't care`,
      denyButtonText: `No, I want my mommy`,
      icon: 'warning'
    }).then((result) => {
      if (result.isConfirmed) {
        this.handleDelete();
      } 
      // else if (result.isDenied) {
      //   // ...
      // }
    })
    
  }

  handleDelete() {
    this.http.deleteCustomer(this.customer.curId).pipe(
      map(res => {
        if(res.statusCode = 200) {
          this.getCustomers.emit();
        }
      })
    ).subscribe();
  }
}
