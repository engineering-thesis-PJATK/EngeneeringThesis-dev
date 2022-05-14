import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './components/account/account.component';
import { SignInComponent } from './components/account/sign-in/sign-in.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyFormComponent } from './components/company/company-form/company-form.component';
import { ExtraOptions } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreateTicketComponent } from './components/ticket/create-ticket/create-ticket.component';
import { TicketListComponent } from './components/ticket/ticket-list/ticket-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerFormComponent } from './components/customer/customer-form/customer-form.component';
import { TeamComponent } from './components/team/team.component';
import { TeamFormComponent } from './components/team/team-form/team-form.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectFromComponent } from './components/project/project-from/project-from.component';
import { ProjectDetailsComponent } from './components/project/project-details/project-details/project-details.component';
import { SettingListComponent } from './components/settings/setting-list/setting-list.component';
import { ReportComponent } from './components/report/report.component';
import { PasswordReminderComponent } from './components/account/password-reminder/password-reminder.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {
    path: 'login',
    component: AccountComponent,
    children: [{ path: '', component: SignInComponent }],
  },
  { path: 'remind', component: PasswordReminderComponent},
  {
    path: 'companies',
    component: CompanyComponent,
    //children: [{ path: 'add', component: CompanyComponent }],
  },  
  { path: 'companies/add', component: CompanyFormComponent },

  {path: 'tickets', component: TicketListComponent},
  {path: 'tickets/create', component: CreateTicketComponent},

  {path: 'settings', component: SettingListComponent},
  {path: 'settings/edit', component: SettingListComponent},

  {path: 'employees', component: EmployeeComponent},
  {path: 'employees/add', component: EmployeeFormComponent},

  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/add', component: CustomerFormComponent},

  {path: 'teams', component: TeamComponent},
  {path: 'teams/add', component: TeamFormComponent},

  {path: 'projects', component:ProjectComponent},
  {path: 'projects/add', component:ProjectFromComponent},
  {path: 'projects/:id', component:ProjectDetailsComponent},

  {path: 'reports', component: ReportComponent},

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  //#endregion tickets 
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload', 
  scrollPositionRestoration: 'enabled'
};



@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions),
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
