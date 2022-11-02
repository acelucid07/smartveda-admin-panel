import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { TABLE_HEADING } from 'src/app/_models/table_heading';
import { ProductService } from 'src/app/_services/product.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  sidebarSpacing: any;
  cols!: TABLE_HEADING[];
  productList: []= []
  fgsType: any;
  constructor(private ngxLoader: NgxUiLoaderService,
    private ProductService: ProductService,
    private toastr: ToastrMsgService,) { }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.sidebarSpacing = 'contracted';
    this.cols = [
      { field: 'id', show: true, headers: 'ProductId' },
      { field: 'name', show: true, headers: 'ProductName' },
      { field: 'category', show: true, headers: 'Category' },
      { field: 'manufacturer/brands', show: true, headers: 'Brand' },
      { field: 'price', show: true, headers: 'Price' },
      { field: 'Quantity', show: true, headers: 'Quantity' },
      { field: 'status', show: true, headers: 'Status' },
    ]
    this.getProductList()
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  getProductList() {
    this.ProductService.getProductList().subscribe((res:any) => {
      this.productList = res
      this.ngxLoader.stop();
    })
  }
  deleteProduct(categoryList: any) {
    this.ngxLoader.start();
    this.ProductService.deleteProduct(categoryList.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("sponsor deleted successfully", "sponsor delete")
        this.getProductList()
      }
    })
  }
}
