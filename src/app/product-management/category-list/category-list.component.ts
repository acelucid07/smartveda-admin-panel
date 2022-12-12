import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { category } from 'src/app/_models/catalog';
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
  categoryList:category []= []
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
      { field: '_id', show: true, headers: 'Id' },
      { field: 'name', show: true, headers: 'Name' },
      { field: 'parentCategoryId', show: true, headers: 'parent Category Id' },
      { field: 'image', show: true, headers: 'Image' },
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
    this.ProductService.getCategoryList().subscribe((res:category[]) => {
      console.log(res)
      this.categoryList = res
      console.log(this.categoryList)
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
