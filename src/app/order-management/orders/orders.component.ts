import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { order } from 'src/app/_models/order';
import { OrdersService } from 'src/app/_services/orders.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading'
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { ModulePermissionService } from 'src/app/_services/module-permission.service';
import { access } from 'src/app/_models/modulepermission';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  orderData: order[] = [];
  fgsType: any;
  accessPermission:access
  constructor(
    private orderService: OrdersService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService,
    private permissionService:ModulePermissionService
  ){
      this.permissionService.getModulePermission().subscribe(res=>{ 
        this.accessPermission=res[0].OrderList
        console.log( this.accessPermission)
      })
   }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.getOrderList()

    this.cols = [
      { field: 'orderId', show: true, headers: 'Order Id' },
      { field: 'orderNo', show: true, headers: 'Order No' },
      { field: 'orderDate', show: true, headers: 'Order Date' },
      { field: 'customerId', show: true, headers: 'Customer Id' },
      { field: 'paymentStatus', show: true, headers: 'Payment Status' },
      { field: 'paymentType', show: true, headers: 'Payment Type' },
      { field: 'total', show: true, headers: 'Total' },
      { field: 'deliveryStatus', show: true, headers: 'Delivery Status' },
      { field: 'deliveryType', show: true, headers: 'Delivery Type' },
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
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  deleteOrder(order: number) {
    this.ngxLoader.start();
    this.orderService.deleteOrder(order).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("order deleted successfully", "order delete")
        this.getOrderList()
      }
    })
  }
  getOrderList() {
    this.orderService.getOrderList().subscribe((data) => {
      this.orderData = data
      this.ngxLoader.stop();
    });
  }
}
