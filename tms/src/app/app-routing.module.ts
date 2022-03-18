import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './components/account/account.component';
import { SignInComponent } from './components/account/sign-in/sign-in.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyFormComponent } from './components/company/company-form/company-form.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreateTicketComponent } from './components/ticket/create-ticket/create-ticket.component';
import { TicketListComponent } from './components/ticket/ticket-list/ticket-list.component';

const routes: Routes = [
  //#region singup
  {
    path: 'signup',
    component: AccountComponent,
    children: [{ path: '', component: SignUpComponent }],
  },
  //#endregion singup
  //#region login
  {
    path: 'login',
    component: AccountComponent,
    children: [{ path: '', component: SignInComponent }],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  //#endregion login
  //#region companies
  {
    path: 'companies',
    component: CompanyComponent,
    //children: [{ path: 'add', component: CompanyComponent }],
  },  
  { path: 'companies/add', component: CompanyFormComponent },
  //#endregion companies  
  //#region tickets 
  {path: 'tickets', component: TicketListComponent},
  {path: 'tickets/create', component: CreateTicketComponent}
  //#endregion tickets 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
  ],
  exports: [
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
  ],
})
export class AppRoutingModule {}
