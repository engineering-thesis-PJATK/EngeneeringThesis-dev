import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './navbar/search/search.component';
import { CompanyComponent } from './company/company.component';
import { CompanyFormComponent } from './company/company-form/company-form.component';
import { CompanyAddressFormComponent } from './company/company-address-form/company-address-form.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    SearchComponent,
    CompanyComponent,
    CompanyFormComponent,
    CompanyAddressFormComponent,
    CompanyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
