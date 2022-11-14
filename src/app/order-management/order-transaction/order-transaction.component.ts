import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { OrdersService } from 'src/app/_services/orders.service';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { orderTransactin } from 'src/app/_models/order'; 

@Component({
  selector: 'app-order-transaction',
  templateUrl: './order-transaction.component.html',
  styleUrls: ['./order-transaction.component.scss']
})
export class OrderTransactionComponent implements OnInit {
  sidebarSpacing: any;
  fgsType: any;
  cols: TABLE_HEADING[];
  orderTransactin: orderTransactin[] = [];

  constructor( private ngxLoader: NgxUiLoaderService,
    private orderService: OrdersService,) { }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.orderService.getOrderTransaction().subscribe((data) => {
      this.orderTransactin = data
      this.ngxLoader.stop();
    });
    this.cols = [
      { field: 'transactionId', show: true, headers: 'transactionId' },
      { field: 'orderId', show: true, headers: 'orderId' },
      { field: 'productId', show: true, headers: 'productId' },
      { field: 'discount', show: true, headers: 'discount' },
      { field: 'deliveryCharge', show: true, headers: 'deliveryCharge' },
      { field: 'productTotal', show: true, headers: 'productTotal' },
      { field: 'tax', show: true, headers: 'tax' },
      { field: 'totalAmountWith', show: true, headers: 'totalAmountWith' },
      { field: 'methodOfPayment', show: true, headers: 'methodOfPayment' },
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
