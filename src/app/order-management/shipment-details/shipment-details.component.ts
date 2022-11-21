import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { OrdersService } from 'src/app/_services/orders.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { Shipments } from 'src/app/_models/order';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.scss']
})
export class ShipmentDetailsComponent implements OnInit {
  sidebarSpacing: string;
  orderId:number
  fgsType:any
  ShipmentDetails:Shipments
  constructor(private activateRoute: ActivatedRoute,
    private orderService: OrdersService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService,) { }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.activateRoute.queryParamMap.subscribe(params => {
      this.orderId = parseInt(params.get('orderId'));
    });
    this.getOrderShippingListById()
  }
  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  getOrderShippingListById(){
    this.orderService.getOrderShippingListById(this.orderId).subscribe((data) => {
      this.ShipmentDetails =  data
      console.log(this.ShipmentDetails)
     this.ngxLoader.stop();
    });
  }
}
