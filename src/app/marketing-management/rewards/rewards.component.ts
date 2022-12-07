import { Component, OnInit, ViewChild } from '@angular/core';
import { rewardsRedemptionData } from 'src/app/DummyData/marketing';
import rewards from 'src/app/_models/marketingModule';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { MarketingService } from 'src/app/_services/marketing';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: string;
  rewardsRedemptionData: rewards[] = [];
  fgsType: any;
  cols!: TABLE_HEADING[];

  constructor(
    private ngxLoader: NgxUiLoaderService,
    private MarketingService: MarketingService
  ) { }

  ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.getRewardRedemption()
    this.cols = [
      { field: 'couponCodeId', show: true, headers: 'Coupon Id' },
      { field: 'couponCodeName', show: true, headers: 'Coupon Name' },
      { field: 'customerEmail', show: true, headers: 'Customer Email' },
      { field: 'appliedOn', show: true, headers: 'Applied On' },
      { field: 'completedOn', show: true, headers: 'Completed On' },
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

  getRewardRedemption(){
    this.MarketingService.getRewardRedemptionList().subscribe((data => {
      this.rewardsRedemptionData = data
    }))
    console.log(rewardsRedemptionData);
  }
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
    console.log($event)
  }
}
