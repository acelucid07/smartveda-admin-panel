import { Component, OnInit } from '@angular/core';
import { order } from 'src/app/_models/order';
import { OrdersService } from 'src/app/_services/orders.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading'
@Component({
  selector: 'app-delivered-order',
  templateUrl: './delivered-order.component.html',
  styleUrls: ['./delivered-order.component.scss']
})
export class DeliveredOrderComponent implements OnInit {
  cols!: TABLE_HEADING[];
  deliveredOrder: order[] = [];
  fgsType: any;
  constructor(private orderService: OrdersService,
    private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.orderService.getDeliveredOrderList().subscribe((data) => {
      this.deliveredOrder = data
      this.ngxLoader.stop();
    });
    this.cols = [
      { field: 'orderId', show: true, headers: 'Order Id' },
      { field: 'orderNo', show: true, headers: 'Order No' },
      { field: 'orderDate', show: true, headers: 'Order Date' },
      { field: 'customerId', show: true, headers: 'Customer Id' },
      { field: 'deliveryStatus', show: true, headers: 'Delivery Status' },
    ]
  }

}
