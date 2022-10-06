import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService as AuthGuard} from '../_services/auth-guard.service';
import { CustomerListComponent } from '../customer/customer-list/customer-list.component';
import { ProfileBasicInfoComponent } from './profile-basic-info/profile-basic-info.component';
import { UpdateCustomerComponent } from '../customer/update-customer/update-customer.component';


const routes: Routes = [
  //  { path: '', component: ProfileComponent, canActivate: [AuthGuard] },
  //  { path: 'customer', component: CustomerListComponent, canActivate: [AuthGuard] },
  //  { path: 'viewcustomer', component: ProfileBasicInfoComponent, canActivate: [AuthGuard]},
  //  { path: 'editcutomer', component: UpdateCustomerComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
