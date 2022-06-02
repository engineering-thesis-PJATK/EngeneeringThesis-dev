import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from "@angular/material/slider";
import {MatIconModule} from '@angular/material/icon';
import { KanbanCardComponent } from './components/dashboard/kanban-card/kanban-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

import { TeamComponent } from './components/team/team.component';
import { TeamFormComponent } from './components/team/team-form/team-form.component';
import { TeamMemberListComponent } from './components/team/team-form/team-member-list/team-member-list.component';
import { TeamCardComponent } from './components/team/team-card/team-card.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectCardComponent } from './components/project/project-card/project-card.component';
import { ProjectFromComponent } from './components/project/project-from/project-from.component';
import { ProjectDetailsComponent } from './components/project/project-details/project-details/project-details.component';
import { ProjectTaskComponent } from './components/project/project-details/project-task/project-task.component';
import { EmployeeEditComponent } from './components/employee/employee-edit/employee-edit.component';
import { TeamEditComponent } from './components/team/team-edit/team-edit.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { EmployeeFormSelectComponent } from './components/employee/employee-form-select/employee-form-select.component';
import { EmployeeEditSelectComponent } from './components/employee/employee-edit-select/employee-edit-select.component';
import { CustomerFormSelectComponent } from './components/customer/customer-form-select/customer-form-select.component';

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
    KanbanCardComponent,
    TeamComponent,
    TeamFormComponent,
    TeamMemberListComponent,
    TeamCardComponent,
    ProjectComponent,
    ProjectCardComponent,
    ProjectFromComponent,
    ProjectDetailsComponent,
    ProjectTaskComponent,
    EmployeeEditComponent,
    TeamEditComponent,
    CustomerEditComponent,
    EmployeeFormSelectComponent,
    EmployeeEditSelectComponent,
    CustomerFormSelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterializeCollapsibleModule,
    HttpClientModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
