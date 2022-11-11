import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-order-transaction',
  templateUrl: './order-transaction.component.html',
  styleUrls: ['./order-transaction.component.scss']
})
export class OrderTransactionComponent implements OnInit {
  sidebarSpacing: any;
  fgsType: any;
  constructor( private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
  }
  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
}
