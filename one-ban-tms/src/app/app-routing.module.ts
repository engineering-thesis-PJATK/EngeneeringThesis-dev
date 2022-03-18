import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { CompanyComponent } from './company/company.component';
import { CompanyFormComponent } from './company/company-form/company-form.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

const routes: Routes = [
  {
    path: 'signup',
    component: UserComponent,
    children: [{ path: '', component: SignUpComponent }],
  },
  {
    path: 'login',
    component: UserComponent,
    children: [{ path: '', component: SignInComponent }],
  },
  { path: 'companies', component: CompanyComponent },
  { path: 'company/add', component: CompanyFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  //{ path: '', redirectTo: '/login', pathMatch: 'full'},
  //{ path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule],
  exports: [RouterModule, MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule],
})
export class AppRoutingModule {}
