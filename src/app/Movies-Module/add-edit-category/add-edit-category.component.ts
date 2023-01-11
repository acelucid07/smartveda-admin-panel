import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { category, parent_category, SEO } from 'src/app/_models/catalog';
import { CommonService } from 'src/app/_services/common';
import { ProductService } from 'src/app/_services/product.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss']
})
export class AddEditCategoryComponent implements OnInit {
  sidebarSpacing: any;
  fgsType: any;
  id: any
  title: string = " "
  editMode: boolean = false
  productCategoryForm: FormGroup
  payload: category
  parent_category: parent_category
  parentId;
  image: File;
  imageUrl;
  seo: SEO
  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private ngxLoader: NgxUiLoaderService,
    private route: Router,
    private toastr: ToastrMsgService,
    private commonService: CommonService,
    private ProductService: ProductService
  ) {
    this.productCategoryForm = this.fb.group({
      categoryName: ["", [Validators.required]],
      parentCategoryName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      metaTitle: ['', [Validators.required]],
      metaDescription: ['', [Validators.required]],
      metaKeyword: ['', [Validators.required]],
      status: ['', [Validators.required]]
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
        this.title = "Edit Category"
        this.getProductCategoryById()
      } else {
        this.editMode = false
        this.title = "Add New category"
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

  addProductCategory(addPayloadData: category) {
    this.ProductService.addCategory(addPayloadData).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Category added successfully", "Product Added")
        this.ngxLoader.stop()
        this.route.navigate(['/product/categorylist'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }

  getProductCategoryById() {
    this.ProductService.getCategoryById(parseInt(this.id)).subscribe((res: any) => {
      this.productCategoryForm.patchValue({
        categoryName: res.categoryName,
        parentCategoryName: res.parent_category.name,
        status: res.status,
        description: res.description,
        images: res.images,
        metaTitle: res.meta_description.meta_title,
        metaDescription: res.meta_description.meta_description,
        metaKeyword: res.meta_description.meta_keyword,
      })
      this.imageUrl = res.image,
        this.parentId = res.parent_category.id
      this.ngxLoader.stop();
    })
  }

  editProductCategory(editData: category) {
    this.ProductService.editCategory(editData, this.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Product edit successfully", "Product edit")
        this.ngxLoader.stop()
        this.route.navigate(['/product/categorylist'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }
  submitForm() {
    this.seo = {
      meta_title: this.productCategoryForm.controls['metaDescription'].value,
      meta_description: this.productCategoryForm.controls['metaTitle'].value,
      meta_keywords: this.productCategoryForm.controls['metaKeyword'].value
    }
    this.parent_category = {
      id: this.parentId,
      name: this.productCategoryForm.controls['parentCategoryName'].value
    }
    this.payload = {
      id: parseInt(this.id),
      categoryName: this.productCategoryForm.controls['categoryName'].value,
      image: this.image,
      description: this.productCategoryForm.controls['description'].value,
      status: this.productCategoryForm.controls['status'].value,
      parent_category: this.parent_category,
      meta_description: this.seo
    }
    this.ngxLoader.start();
    if (this.editMode) {
      console.log(this.payload)
      this.editProductCategory(this.payload)
    } else {
      this.addProductCategory(this.payload)
    }
  }
  OnChange(event) {
    this.image = event.target.files;
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
        this.imageUrl = data.target.result;
    }
  }
}
