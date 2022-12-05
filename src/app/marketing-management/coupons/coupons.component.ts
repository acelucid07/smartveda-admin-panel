import { Component, OnInit, ViewChild } from '@angular/core';
import { MarketingService } from 'src/app/_services/marketing';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading'
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { CouponCode } from 'src/app/_models/marketingModule';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: string;
  fgsType: any;
  cols!: TABLE_HEADING[];
  couponData: CouponCode[] = []

  constructor(
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService,
    private MarketingService: MarketingService) { }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.getCouponList()
    this.cols = [
      { field: 'Country', show: true, headers: 'Country' },
      { field: 'Code', show: true, headers: 'Code' },
      { field: 'Title', show: true, headers: 'Promotion Name' },
      { field: 'couponType', show: true, headers: 'Promo Code Type' },
      { field: 'endDate', show: true, headers: 'End Date' },
      { field: 'status', show: true, headers: 'Status' },
    ]
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  getCouponList() {
    this.MarketingService.getCouponList().subscribe((data) => {
      this.couponData = data
      this.ngxLoader.stop();
    });
  }
  InActivate(Code){

  }
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    console.log($event)
  }
}
