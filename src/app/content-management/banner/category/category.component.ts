import { Component, OnInit } from '@angular/core';
import { TABLE_HEADING } from '../../../_models/table_heading'
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { CmsService } from '../../../_services/cms.service';
import { CATEGORY } from '../../../_models/cms'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  categoryList: CATEGORY[] = []
  fgsType: any;
  constructor(private ngxLoader: NgxUiLoaderService,
    private CmsService: CmsService
  ) { }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: 'id', show: true, headers: 'ID' },
      { field: 'name', show: true, headers: 'name' },
      { field: 'image', show: true, headers: 'image' },
      { field: 'hyperlink', show: true, headers: 'hyperlink' },
      { field: 'position', show: true, headers: 'position' },
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
    this.CmsService.getCategoryList().subscribe((res: CATEGORY[]) => {
      this.categoryList = res
      console.log(this.categoryList)
      this.ngxLoader.stop();
    })
  }
}
