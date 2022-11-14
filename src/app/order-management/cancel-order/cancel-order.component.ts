import { Component, OnInit,ViewChild} from '@angular/core';
import { cancelOrder } from 'src/app/_models/order';
import { OrdersService } from 'src/app/_services/orders.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading'
import { Table } from 'primeng/table';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.scss']
})
export class CancelOrderComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing:any;
 cols!: TABLE_HEADING[];
  cancelOrder: cancelOrder[] = [];
  fgsType: any;
  constructor(
    private orderService: OrdersService,
    private ngxLoader: NgxUiLoaderService
  ) {

  }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
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
  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    console.log($event)
  }
 
 
}
