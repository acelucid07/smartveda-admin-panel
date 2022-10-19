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
      { field: 'id', headers: 'ID' },
      { field: 'name', headers: 'name' },
      { field: 'image', headers: 'image' },
      { field: 'hyperlink', headers: 'hyperlink' },
      { field: 'position', headers: 'position' },
      { field: 'parent_id', headers: 'parent_id' },
      { field: 'parent_name', headers: 'parent_name' },
    ]
  }

}
