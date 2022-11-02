import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ProductService } from 'src/app/_services/product.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {
  sidebarSpacing: string = "";
  fgsType: any;
  id: any
  title: string = " "
  editMode: boolean = false
  productForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private ngxLoader: NgxUiLoaderService,
    private route: Router,
    private toastr: ToastrMsgService,
    private ProductService: ProductService
  ) {
    this.productForm = this.fb.group({
      sellerFirstName: ['', [Validators.required]],
      sellerLastName: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      ContactNo: ['', [Validators.required]],
      City: ['', [Validators.required]],
      Street: ['', [Validators.required]],
      Landmark: ['', [Validators.required]],
      State: ['', [Validators.required]],
      Zip_code: ['', [Validators.required]],
      Country: ['', [Validators.required]],
      ProductName: ['', [Validators.required]],
      SKUs: ['', [Validators.required]],
      Brand: ['', [Validators.required]],
      Category: ['', [Validators.required]],
      Variants: ['', [Validators.required]],
      Weight: ['', [Validators.required]],
      Price: ['', [Validators.required]],
      Quantity: ['', [Validators.required]],
      Status: ['', [Validators.required]],
      Description: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.activateRoute.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id && this.id != undefined) {
        this.editMode = true
        this.title = "Edit Product"
        this.getProductById()
      } else {
        this.editMode = false
        this.title = "Add New Product"
      }
    });
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }
  addProduct() {
    this.ProductService.addProduct(this.productForm.value).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Product added successfully", "Product Added")
        this.ngxLoader.stop()
        this.route.navigate(['/crm/category'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }
  getProductById() {
    this.ProductService.getProductById(this.id).subscribe((res: any) => {
      this.productForm.patchValue({
        id: res.id,
        sellerFirstName: res.sellerFirstName,
        sellerLastName: res.sellerLastName,
        Email: res.Email,
        ContactNo: res.ContactNo,
        City: res.City,
        Street: res.Street,
        Landmark: res.Landmark,
        State: res.State,
        Zip_code: res.Zip_code,
        Country: res.Country,
        ProductName: res.ProductName,
        SKUs: res.SKUs,
        Brand: res.Brand,
        Category: res.Category,
        Variants: res.Variants,
        Weight: res.Weight,
        Price: res.Price,
        Quantity: res.Quantity,
        Status: res.Status,
        Description: res.Description,
      })

      this.ngxLoader.stop();
    })
  }
  editProduct() {
    this.ProductService.editProduct(this.productForm.value, this.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Product edit successfully", "Product edit")
        this.ngxLoader.stop()
        this.route.navigate(['/crm/category'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }
}
