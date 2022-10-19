import { Component, OnInit } from '@angular/core';
import { TABLE_HEADING } from '../../../_models/table_heading'
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  fgsType: any;
  constructor(private ngxLoader: NgxUiLoaderService) { }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: 'id',show:true, headers: 'ID' },
      { field: 'name',show:true, headers: 'name' },
      { field: 'image',show:true, headers: 'image' },
      { field: 'hyperlink',show:true, headers: 'hyperlink' },
      { field: 'position',show:true, headers: 'position' },
    ]
  }

}
