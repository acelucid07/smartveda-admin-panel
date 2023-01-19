import { Component, OnInit, ViewChild } from '@angular/core';
import { TABLE_HEADING } from '../../_models/table_heading'
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { BundleService } from '../../_services/bundle.service';
import { CATEGORY } from '../../_models/cms'
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { Table } from 'primeng/table';
import { Bundle } from 'src/app/_models/bundle';
@Component({
  selector: 'app-bundle-list',
  templateUrl: './bundle-list.component.html',
  styleUrls: ['./bundle-list.component.scss']
})
export class BundleListComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  categoryList: Bundle[] = []
  fgsType: any;
  constructor(private ngxLoader: NgxUiLoaderService,
    private BundleService: BundleService,
    private toastr: ToastrMsgService,
  ) { }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: '_id', show: true, headers: 'Id' },
      { field: 'categoryName', show: true, headers: 'Category Name' },
      { field: 'image', show: true, headers: 'Image' },
      { field: 'basketInfluencersCount', show: true, headers: 'Influencers Count' },
    ]
    this.getCategoryList()
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  getCategoryList() {
    this.BundleService.getBundleList().subscribe((res: Bundle[]) => {
      this.categoryList = res
      console.log(this.categoryList)
      this.ngxLoader.stop();
    })
  }
  // deleteCategory(categoryList: any) {
  //   this.ngxLoader.start();
  //   this.CmsService.deleteCategory(categoryList.id).subscribe(res => {
  //     if (res) {
  //       this.toastr.showSuccess("sponsor deleted successfully", "sponsor delete")
  //       this.getCategoryList()
  //     }
  //   })
  // }
  //Search functionality start here
  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
