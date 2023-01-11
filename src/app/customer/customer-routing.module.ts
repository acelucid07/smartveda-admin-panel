import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileBasicInfoComponent } from '../profile/profile-basic-info/profile-basic-info.component';
import { ProfileComponent } from '../profile/profile/profile.component';
import { AuthGuardService as AuthGuard} from '../_services/auth-guard.service';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import {QuibUserComponent} from './quib-user/quib-user.component'
const routes: Routes = [
  { path: '', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'customer', component: CustomerListComponent, canActivate: [AuthGuard] },
  { path: 'viewcustomer', component: ProfileBasicInfoComponent, canActivate: [AuthGuard]},
  { path: 'editcustomer', component: UpdateCustomerComponent, canActivate: [AuthGuard]},
  { path: 'quib-user', component: QuibUserComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
