import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PasswordService } from '../../../services/password/password.service';
@Component({
  selector: 'app-password-reminder',
  templateUrl: './password-reminder.component.html',
  styleUrls: ['./password-reminder.component.scss']
})
export class PasswordReminderComponent implements OnInit {

  constructor(private http: PasswordService, private router: Router) { }

  ngOnInit(): void {
  }
  changePassword(email: string){
    this.http.changePassword(email).subscribe();
    Swal.fire({
      title: 'Password changed',
      icon: 'info',
      text: 'A new password has been sent to your email inbox',
      confirmButtonText:'Ok'
    }).then((result) => {
      if(result.isConfirmed){
        this.router.navigate(['/','login'])
      }
    })
  }
}
