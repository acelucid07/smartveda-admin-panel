import { order } from 'src/app/_models/order';
import { Component, OnInit,ViewChild} from '@angular/core';
import { cancelOrder } from 'src/app/_models/order';
import { OrdersService } from 'src/app/_services/orders.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading'
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.scss']
})
export class CancelOrderComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
 cols!: TABLE_HEADING[];
  cancelOrder: cancelOrder[] = [];
  fgsType: any;
  constructor(
    private orderService: OrdersService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService
  ) {

  }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.getCancelOrderList();
    
    this.cols = [
      { field: 'cancelTransId', show: true, headers: 'cancelTransId' },
      { field: 'orderId', show: true, headers: 'orderId' },
      { field: 'total', show: true, headers: 'total' },
      { field: 'refundInitiated', show: true, headers: 'refundInitiated' },
      { field: 'productId', show: true, headers: 'productId' },
      { field: 'deliveryCharge', show: true, headers: 'deliveryCharge' },
    ]
  }

  
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    console.log($event)
  }
  deleteOrder(order: number){
    this.ngxLoader.stop();
    this.orderService.deleteCancelledOrder(order).subscribe((res) => {
      if (res) {
        this.toastr.showSuccess('order deleted successfully', 'order delete');
        this.getCancelOrderList();
      }
    });
  }
  getCancelOrderList(){
    this.orderService.getCancelOrderList().subscribe((data) => {
      this.cancelOrder = data
      this.ngxLoader.stop();
    });
  }
 
 
}
