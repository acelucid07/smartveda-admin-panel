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
    this.orderService.getOrders().subscribe((data) => {
      this.orderData = data;
     this.ngxLoader.stop();
    });

    this.cols = [
      { field:'id',show:true, headers: 'Order Id'},
      { field:'customerId',show:true, headers: 'Customer Id'},
      { field: 'productName',show:true, headers: 'Product Name'},
      { field: 'deliveryStatus',show:true, headers: 'Delivery Status'},
      { field: 'deliveryDate',show:true, headers: 'Delivery Date'},
      { field: 'price',show:true, headers: 'Price'},
      { field: 'paymentMode',show:true, headers: 'Payment Mode'},
      { field: 'paymentStatus',show:true, headers: 'Payment Status'}
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
