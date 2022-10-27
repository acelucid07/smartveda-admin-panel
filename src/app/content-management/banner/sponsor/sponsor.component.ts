import { Component, OnInit } from '@angular/core';
import { TABLE_HEADING } from '../../../_models/table_heading'
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { CmsService } from '../../../_services/cms.service';
import { SPONSOR } from '../../../_models/cms'
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  fgsType: any;
  sponsorList: SPONSOR[] = []
  constructor(private ngxLoader: NgxUiLoaderService,
    private CmsService: CmsService,
    private toastr: ToastrMsgService,) { }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: 'id', show: true, headers: 'ID' },
      { field: 'name', show: true, headers: 'name' },
      { field: 'email', show: true, headers: 'sponsor_email' },
      { field: 'phone', show: true, headers: 'phone_No' },
      { field: 'funding', show: true, headers: 'funding' },
      { field: 'city ', show: true, headers: 'City ' },
      { field: 'street ', show: true, headers: 'Street ' },
      { field: 'landmark ', show: true, headers: 'Landmark ' },
      { field: 'state ', show: true, headers: 'State ' },
      { field: 'zip ', show: true, headers: 'Zip_Code ' },
      { field: 'country ', show: true, headers: 'Country ' },
    ]
    this.getSponsorList()
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  getSponsorList() {
    this.CmsService.getSponsorList().subscribe((res: SPONSOR[]) => {
      this.sponsorList = res
      this.ngxLoader.stop();
    })
  }

  deleteSponsor(sponsorList: any) {
    this.ngxLoader.start();
    this.CmsService.deleteSponsor(sponsorList.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("category deleted successfully", "category delete")
        this.getSponsorList()
      }
    })
  }
}
