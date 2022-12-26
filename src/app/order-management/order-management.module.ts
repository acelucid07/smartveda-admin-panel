import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderManagementRoutingModule } from './order-management-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { SharedModule } from '../shared/shared.module';
import { OrderTransactionComponent } from './order-transaction/order-transaction.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { ConfirmedOrderComponent } from './confirmed-order/confirmed-order.component';
import { DeliveredOrderComponent } from './delivered-order/delivered-order.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import { AddEditOrdersComponent } from './add-edit-orders/add-edit-orders.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

@NgModule({
  declarations: [
    OrdersComponent,
    OrderTransactionComponent,
    CancelOrderComponent,
    ConfirmedOrderComponent,
    DeliveredOrderComponent,
    ShipmentComponent,
    ShipmentDetailsComponent,
    AddEditOrdersComponent,
    TransactionDetailsComponent
  ],
  imports: [
    CommonModule,
    OrderManagementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrderManagementModule { }
