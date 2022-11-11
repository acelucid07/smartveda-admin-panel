import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { order } from 'src/app/_models/order';
import { OrdersService } from 'src/app/_services/orders.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import {TABLE_HEADING} from '../../_models/table_heading'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  orderData:order[]=[];
  fgsType: any;

  constructor(
    private orderService: OrdersService,
    private ngxLoader: NgxUiLoaderService
    ) { }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.orderService.getOrderList().subscribe((data) => {
      this.orderData = data
      this.ngxLoader.stop();
    });

    this.cols = [
      { field: 'orderId', show: true, headers: 'Order_Id' },
      { field: 'customerId', show: true, headers: 'Customer_Id' },
      { field: 'orderDate', show: true, headers: 'order_Date' },
      { field: 'orderNo', show: true, headers: 'orderNo' },
      { field: 'paymentStatus', show: true, headers: 'Payment_Status' },
      { field: 'deliveryType', show: true, headers: 'delivery_Type' },
      { field: 'paymentType', show: true, headers: 'payment_Type' },
      { field: 'total', show: true, headers: 'total' },
      { field: 'deliveryStatus', show: true, headers: 'Delivery_Status' },
      { field: 'country', show: true, headers: 'Country' }
    ]
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
}
