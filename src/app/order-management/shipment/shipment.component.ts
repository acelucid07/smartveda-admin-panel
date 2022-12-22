import { Component, OnInit, ViewChild } from '@angular/core';
import { Shipments } from 'src/app/_models/order';
import { OrdersService } from 'src/app/_services/orders.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading'
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.scss']
})
export class ShipmentComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  Shipments: Shipments[] = [];
  fgsType: any;
  constructor(private orderService: OrdersService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService,) { }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.getOrderShippingList()
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: 'Shipment Id', show: true, headers: 'shipment Id' },
      { field: 'Order Id', show: true, headers: 'Order Id' },
      { field: 'Order Date', show: true, headers: 'Order Date' },
      { field: 'Total Quantity', show: true, headers: 'Total Quantity' },
      { field: 'Shipment Date', show: true, headers: 'Shipment Date' },
      { field: 'Shipping To', show: true, headers: 'Shipping To' },
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
  getOrderShippingList() {
    this.orderService.getOrderShippingList().subscribe((data) => {
      this.Shipments =  data
     this.ngxLoader.stop();
    });
  }
  deleteOrderShipping(shipmentId:number) {
    this.ngxLoader.start();
    this.orderService.deleteOrderShipping(shipmentId).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("shipping  data is  deleted successfully", "order delete")
        this.getOrderShippingList()
      }
    })
  }
}
