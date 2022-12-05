import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingManagementRoutingModule } from './marketing-management-routing.module';
import { CouponsComponent } from './coupons/coupons.component';
import {SharedModule} from '../shared/shared.module';
import { AddEditCouponComponent } from './add-edit-coupon/add-edit-coupon.component';
import { ActiveCouponComponent } from './active-coupon/active-coupon.component';
import { InactiveCouponComponent } from './inactive-coupon/inactive-coupon.component';
import { RewardsComponent } from './rewards/rewards.component';

@NgModule({
  declarations: [
    CouponsComponent,
    AddEditCouponComponent,
    ActiveCouponComponent,
    InactiveCouponComponent,
    RewardsComponent
  ],
  imports: [
    CommonModule,
    MarketingManagementRoutingModule,
    SharedModule
  ]
})
export class MarketingManagementModule { }
