import { Component, OnInit } from '@angular/core';
import { TABLE_HEADING } from '../../../_models/table_heading'
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  fgsType: any;
  constructor(private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: 'id', show:true,headers: 'ID' },
      { field: 'name',show:true, headers: 'name' },
      { field: 'email',show:true, headers: 'sponsor_email' },
      { field: 'phone_No',show:true, headers: 'phone_No' },
      { field: 'funding', show:true,headers: 'funding' },
      { field: 'Address ',show:true, headers: 'Address ' },
    ]
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
}
