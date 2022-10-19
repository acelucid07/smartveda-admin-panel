import { Component, OnInit } from '@angular/core';
import { TABLE_HEADING } from '../../../_models/table_heading'
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {
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
      { field: 'image',show:true, headers: 'image' },
      { field: 'hyperlink', show:true,headers: 'hyperlink' },
      { field: 'position', show:true,headers: 'position' },
      { field: 'parent_id', show:true,headers: 'parent_id' },
      { field: 'parent_name',show:true, headers: 'parent_name' },
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
