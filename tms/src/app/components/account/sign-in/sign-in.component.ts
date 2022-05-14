import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/credentials';
import { AccountService } from 'src/app/services/account/account.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  credentials: Partial<Credentials> = {};

  constructor(private accountService: AccountService, private router: Router) {}


  SignIn(): void {
    console.log(this.credentials);
    // this.accountService.postApiKey(this.credentials).subscribe(
    //   result => console.log(result),
    //   error => console.error(error)
    // );
    this.accountService.postApiKey(this.credentials as Credentials).subscribe({
      next: (v) => {
        console.log(v);
        this.router.navigate(['/','dashboard']);
      }, //console.log(v),//this.router.navigate(['/','dashboard']),
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
  RemindPassword(){
    this.router.navigate(['/','remind'])
  }
}
