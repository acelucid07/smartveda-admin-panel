import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { order } from 'src/app/_models/order';
import { OrdersService } from 'src/app/_services/orders.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading';
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
@Component({
  selector: 'app-delivered-order',
  templateUrl: './delivered-order.component.html',
  styleUrls: ['./delivered-order.component.scss'],
})
export class DeliveredOrderComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  cols!: TABLE_HEADING[];
  deliveredOrder: order[] = [];
  fgsType: any;
  @Input() deleteAccess:boolean;
  constructor(
    private orderService: OrdersService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService
  ) {}

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader;
    this.ngxLoader.start();
    this.getDeliveredOrderList();
  
    this.cols = [
      { field: 'orderId', show: true, headers: 'Order Id' },
      { field: 'orderNo', show: true, headers: 'Order No' },
      { field: 'orderDate', show: true, headers: 'Order Date' },
      { field: 'customerId', show: true, headers: 'Customer Id' },
      { field: 'deliveryStatus', show: true, headers: 'Delivery Status' },
    ];
  }
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  deleteOrder(order: number) {
    this.ngxLoader.start();
    this.orderService.deleteDeliveredOrder(order).subscribe((res) => {
      if (res) {
        this.toastr.showSuccess('delivered order deleted successfully', 'order deleted');
        this.getDeliveredOrderList();
      }
    });
  }
  getDeliveredOrderList() {
    this.orderService.getDeliveredOrderList().subscribe((data) => {
      this.deliveredOrder = data;
      this.ngxLoader.stop();
    });
  }
}
