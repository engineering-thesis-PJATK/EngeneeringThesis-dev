import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../../../services/password/password.service';
@Component({
  selector: 'app-password-reminder',
  templateUrl: './password-reminder.component.html',
  styleUrls: ['./password-reminder.component.scss']
})
export class PasswordReminderComponent implements OnInit {

  constructor(private http: PasswordService) { }

  ngOnInit(): void {
  }
  changePassword(email: string){
    this.http.changePassword(email);
  }
}
