import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { AuthGuardService as AuthGuard } from '../_services/auth-guard.service';
import { OrderTransactionComponent } from './order-transaction/order-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'order-transaction', component: OrderTransactionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderManagementRoutingModule { }
