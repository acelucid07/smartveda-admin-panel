import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { order } from 'src/app/_models/order';
import { OrdersService } from 'src/app/_services/orders.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  sidebarSpacing: any;
  cols!: any[];
  orderData:any;
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
      
      // this.orderData.map((item:order)=>{
      //   item.deliveryDate= moment(item.deliveryDate).format('MMM DD, YYYY')
      // })
      this.ngxLoader.stop();
    });

    this.cols = [
      { field:'id', headers: 'Order Id'},
      { field:'customerId', headers: 'Customer Id'},
      { field: 'productName', headers: 'Product Name'},
      { field: 'deliveryStatus', headers: 'Delivery Status'},
      { field: 'deliveryDate', headers: 'Delivery Date'},
      { field: 'price', headers: 'Price'},
      { field: 'paymentMode', headers: 'Payment Mode'},
      { field: 'paymentStatus', headers: 'Payment Status'}
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
