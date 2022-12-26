import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { AuthGuardService as AuthGuard } from '../_services/auth-guard.service';
import { OrderTransactionComponent } from './order-transaction/order-transaction.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import { AddEditOrdersComponent } from './add-edit-orders/add-edit-orders.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'order-transaction', component: OrderTransactionComponent
  },
  {
    path: 'transaction-details', component: TransactionDetailsComponent
  },
  {
    path: 'shipment', component: ShipmentComponent
  },
  {
    path: 'shipment-details', component: ShipmentDetailsComponent
  },
  {
    path: 'createOrder', component: AddEditOrdersComponent
  },
  {
    path: 'editOrder', component: AddEditOrdersComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderManagementRoutingModule { }
