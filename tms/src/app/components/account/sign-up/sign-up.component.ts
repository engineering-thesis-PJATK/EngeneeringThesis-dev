import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  account: Partial<Account> = {};

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  SignUp(): void {
    console.log(this.account);
    this.accountService.registerAccount(this.account as Account).subscribe({
      next: (v) => {
        console.log(v);
        this.router.navigate(['/','login']);
      }, //console.log(v),//this.router.navigate(['/','dashboard']),
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

}
