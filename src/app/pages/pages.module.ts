import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { AppComponent } from '../app.component';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UsersComponent } from './users/users.component';
import { StadisticsComponent } from './stadistics/stadistics.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    OnBoardingComponent,
    SignUpComponent,
    SignInComponent,
    UsersComponent,
    StadisticsComponent,
    ReportsComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
