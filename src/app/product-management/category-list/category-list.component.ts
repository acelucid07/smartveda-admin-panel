import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { ProductService } from 'src/app/_services/product.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  categoryList: []= []
  fgsType: any;
  constructor(
    private ngxLoader: NgxUiLoaderService,
    private ProductService: ProductService,
    private toastr: ToastrMsgService,
  ) { }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: 'id', show: true, headers: 'Id' },
      { field: 'categoryName', show: true, headers: 'Name' },
      { field: 'name', show: true, headers: 'parent Category Name' },
      { field: 'status', show: true, headers: 'Status' },
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
    this.ProductService.getCategoryList().subscribe((res:any) => {
      this.categoryList = res
      this.ngxLoader.stop();
    })
  }

  deleteCategory(categoryList: any) {
    this.ngxLoader.start();
    this.ProductService.deleteCategory(categoryList.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Category deleted successfully", "Category delete")
        this.getCategoryList()
      }
    })
  }
}
