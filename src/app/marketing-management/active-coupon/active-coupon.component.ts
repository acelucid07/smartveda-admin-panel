import { Component, OnInit, ViewChild } from '@angular/core';
import { MarketingService } from 'src/app/_services/marketing';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from '../../_models/table_heading'
import { Table } from 'primeng/table';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { CouponCode } from 'src/app/_models/marketingModule';
@Component({
  selector: 'app-active-coupon',
  templateUrl: './active-coupon.component.html',
  styleUrls: ['./active-coupon.component.scss']
})
export class ActiveCouponComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  fgsType: any;
  cols!: TABLE_HEADING[];    
  couponData: CouponCode[] = []

  constructor(private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrMsgService,
    private MarketingService: MarketingService) { }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.getActiveCouponList()
    this.cols = [
      { field: 'Country', show: true, headers: 'Country' },
      { field: 'Code', show: true, headers: 'Code' },
      { field: 'Title', show: true, headers: 'Promotion Name' },
      { field: 'couponType', show: true, headers: 'Promo Code Type' },
      { field: 'endDate', show: true, headers: 'End Date' },
      { field: 'firstTimeUser', show: true, headers: 'first Time User' },
    ]
  }


  getActiveCouponList() {
    this.MarketingService.getActiveCouponList().subscribe(res => {
      this.couponData = res
      this.ngxLoader.stop();
    })
  }
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    console.log($event)
  }
}
