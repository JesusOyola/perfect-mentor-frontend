import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { AppComponent } from '../app.component';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { UsersComponent } from './users/users.component';
import { StadisticsComponent } from './stadistics/stadistics.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OnBoardingComponent,
    UsersComponent,
    StadisticsComponent,
    ReportsComponent,
    ProfileComponent,
    
  ],
  imports: [CommonModule, PagesRoutingModule, SharedModule, ReactiveFormsModule],
})
export class PagesModule {}
