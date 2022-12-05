import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponsComponent } from './coupons/coupons.component';
import { AuthGuardService as AuthGuard } from '../_services/auth-guard.service';
import { AddEditCouponComponent } from './add-edit-coupon/add-edit-coupon.component';
import { RewardsComponent } from './rewards/rewards.component';

const routes: Routes = [
  {
    path: '',
    component: CouponsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addpromo', component: AddEditCouponComponent, canActivate: [AuthGuard]
  },
  {
    path: 'editpromo', component: AddEditCouponComponent, canActivate: [AuthGuard]
  },
  {
    path: 'redemption', component: RewardsComponent, canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingManagementRoutingModule { }
