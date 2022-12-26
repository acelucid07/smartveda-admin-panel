import { Component, OnInit } from '@angular/core';
import { orderTransactin } from 'src/app/_models/order';
import { OrdersService } from 'src/app/_services/orders.service';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {
  sidebarSpacing: string;
  fgsType:any
  transactionId:string;
  transactionDetails:orderTransactin;
  constructor(
    private activateRoute: ActivatedRoute,
    private transactionService: OrdersService,
    private ngxLoader: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.activateRoute.queryParamMap.subscribe(params => {
      this.transactionId = params.get('TransactionId');
    });
    this.getTransactionDetails();
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  getTransactionDetails(){
    this.transactionService.getTransactionById(this.transactionId).subscribe((data)=>{
      this.transactionDetails = data;
      this.ngxLoader.stop();
    })
  }
}
