import { Component, OnInit } from '@angular/core';
import { cancelOrder } from 'src/app/_models/order';
import { OrdersService } from 'src/app/_services/orders.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading'

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.scss']
})
export class CancelOrderComponent implements OnInit {
 cols!: TABLE_HEADING[];
  cancelOrder: cancelOrder[] = [];
  fgsType: any;
  constructor(
    private orderService: OrdersService,
    private ngxLoader: NgxUiLoaderService
  ) {

  }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.orderService.getCancelOrderList().subscribe((data) => {
      this.cancelOrder = data
      this.ngxLoader.stop();
    });
    this.cols = [
      { field: 'cancelTransId', show: true, headers: 'cancelTransId' },
      { field: 'orderId', show: true, headers: 'orderId' },
      { field: 'total', show: true, headers: 'total' },
      { field: 'refundInitiated', show: true, headers: 'refundInitiated' },
      { field: 'productId', show: true, headers: 'productId' },
      { field: 'deliveryCharge', show: true, headers: 'deliveryCharge' },
    ]
  }
 
}
