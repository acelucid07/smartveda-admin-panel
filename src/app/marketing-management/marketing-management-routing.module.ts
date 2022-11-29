import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponsComponent } from './coupons/coupons.component';
import { AuthGuardService as AuthGuard } from '../_services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: CouponsComponent,
    canActivate: [AuthGuard]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingManagementRoutingModule { }
