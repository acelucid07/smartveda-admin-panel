import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { AuthenticationSignupComponent } from './authentication/authentication-signup/authentication-signup.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule)
  },
  { path: 'login', component: AuthenticationComponent },
  { path: 'signup', component: AuthenticationSignupComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
