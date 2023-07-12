import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPathNames } from '../enums/router-path-names.enum';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { StadisticsComponent } from './stadistics/stadistics.component';
import { AuthComponent } from '../shared/auth/auth.component';

const routes: Routes = [
  {
    path: RouterPathNames.onBoarding,

    component: OnBoardingComponent,
    pathMatch: 'full',
  },
  {
    path: RouterPathNames.signUp,
    component: AuthComponent,
    pathMatch: 'full',
  },
  {
    path: RouterPathNames.signIn,
    component: AuthComponent,
    pathMatch: 'full',
  },
  {
    path: RouterPathNames.profile,
    component: ProfileComponent,
    pathMatch: 'full',
  },
  {
    path: RouterPathNames.users,
    component: UsersComponent,
    pathMatch: 'full',
  },
  {
    path: RouterPathNames.stadistics,
    component: StadisticsComponent,
    pathMatch: 'full',
  },
  {
    path: RouterPathNames.empty,
    redirectTo: RouterPathNames.onBoarding,
    pathMatch: 'full',
  },
  {
    path: RouterPathNames.any,
    redirectTo: RouterPathNames.onBoarding,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
