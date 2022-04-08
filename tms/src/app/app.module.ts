import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account.component';
import { SignInComponent } from './components/account/sign-in/sign-in.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { CompanyFormComponent } from './components/company/company-form/company-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/navbar/search/search.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterializeCollapsibleModule } from 'materialize-angular';
import { CompanyAddressComponent } from './components/company/company-form/company-address/company-address.component';
import { CreateTicketComponent } from './components/ticket/create-ticket/create-ticket.component';
import { TicketListComponent } from './components/ticket/ticket-list/ticket-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CompanyAddressListComponent } from './components/company/company-form/company-address-list/company-address-list.component';
import { CompanyCardComponent } from './components/company/company-card/company-card.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';
import { EmployeeCardComponent } from './components/employee/employee-card/employee-card.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerListCardComponent } from './components/customer/customer-list/customer-list-card/customer-list-card.component';
import { CustomerFormComponent } from './components/customer/customer-form/customer-form.component';
import { TeamComponent } from './components/team/team.component';
import { TeamFormComponent } from './components/team/team-form/team-form.component';
import { TeamMemberListComponent } from './components/team/team-form/team-member-list/team-member-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    SignInComponent,
    SignUpComponent,
    CompanyComponent,
    CompanyDetailsComponent,
    CompanyFormComponent,
    NavbarComponent,
    SearchComponent,
    SidenavComponent,
    CompanyAddressComponent,
    CreateTicketComponent,
    TicketListComponent,
    DashboardComponent,
    PageNotFoundComponent,
    CompanyAddressListComponent,
    CompanyCardComponent,
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeCardComponent,
    CustomerListComponent,
    CustomerListCardComponent,
    CustomerFormComponent,
    TeamComponent,
    TeamFormComponent,
    TeamMemberListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterializeCollapsibleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
