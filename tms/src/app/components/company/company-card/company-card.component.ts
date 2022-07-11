import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { map } from 'rxjs';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {
  @Input() company!: Company;
  @Output() getCompanies = new EventEmitter();
  constructor(private http: CompanyService) { }

  ngOnInit(): void {
  }

  deleteCompany()
  {
    Swal.fire({
      title: 'Do you want to delete a company?',
      showDenyButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
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
    this.http.deleteCompany(this.company.cmpId || 0).pipe(
      map(res => {
        if(res.statusCode = 200) {
          this.getCompanies.emit();
        }
      })
    ).subscribe();
  }

}
