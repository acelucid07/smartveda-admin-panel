import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { order } from 'src/app/_models/order';
import { OrdersService } from 'src/app/_services/orders.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading';
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';

@Component({
  selector: 'app-confirmed-order',
  templateUrl: './confirmed-order.component.html',
  styleUrls: ['./confirmed-order.component.scss'],
})
export class ConfirmedOrderComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  cols!: TABLE_HEADING[];
  confirmedOrder: order[] = [];
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
    this.getConfirmedOrderList();

    this.cols = [
      { field: 'orderId', show: true, headers: 'Order Id' },
      { field: 'orderNo', show: true, headers: 'Order No' },
      { field: 'orderDate', show: true, headers: 'Order Date' },
      { field: 'customerId', show: true, headers: 'Customer Id' },
      { field: 'orderStatus', show: true, headers: 'order Status' },
    ];
  }
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    console.log($event);
  }
  deleteOrder(order: number) {
    this.ngxLoader.start();
    this.orderService.deleteConfirmedOrder(order).subscribe((res) => {
      if (res) {
        this.toastr.showSuccess('ConfirmedOrder deleted successfully', 'order deleted');
        this.getConfirmedOrderList();
      }
    });
  }
  getConfirmedOrderList() {
    this.orderService.getConfirmedOrderList().subscribe((data) => {
      this.confirmedOrder = data;
      this.ngxLoader.stop();
    });
  }
}
