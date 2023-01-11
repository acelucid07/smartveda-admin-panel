import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { category, SEO } from 'src/app/_models/catalog';
import { ProductService } from 'src/app/_services/product.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';

@Component({
  selector: 'app-add-edit-movies',
  templateUrl: './add-edit-movies.component.html',
  styleUrls: ['./add-edit-movies.component.scss']
})
export class AddEditMoviesComponent implements OnInit {
  sidebarSpacing: any;
  fgsType: any;
  id: any
  title: string = " "
  editMode: boolean = false
  productCategoryForm: FormGroup
  image: File;
  imageUrl;
  seo: SEO
  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private ngxLoader: NgxUiLoaderService,
    private route: Router,
    private toastr: ToastrMsgService,
    private ProductService: ProductService
  ) {
    this.productCategoryForm = this.fb.group({
      Director: ["", [Validators.required]],
      File: ['', [Validators.required]],
      IsActive: ['', [Validators.required]],
      ReleaseYear: ['', [Validators.required]],
      Length: ['', [Validators.required]],
      PosterContent: ['', [Validators.required]],
      PosterContentThumb: ['', [Validators.required]],
      Title: ['', [Validators.required]],
      hours:['',[Validators.required]],
      minutes:['',[Validators.required]],
      seconds:['',[Validators.required]],
      Rating:['',[Validators.required]]
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
        this.title = "Add New Movies"
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
