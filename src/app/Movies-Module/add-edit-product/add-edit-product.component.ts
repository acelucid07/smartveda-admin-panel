import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ProductService } from 'src/app/_services/product.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { product, product_region, product_details, manufacturer, Description, prices, SEO, Satatus, Country_List } from 'src/app/_models/catalog'
import { CommonService } from 'src/app/_services/common';
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
  payload
  product_region: product_region
  product_details: product_details
  countryList:Country_List[]=[];
  manufacturer: manufacturer
  prices: prices
  SEO: SEO
  Image
  imageData: File
  Status = Satatus
  expand: boolean = false
  Description: Description
  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private ngxLoader: NgxUiLoaderService,
    private route: Router,
    private CommonService: CommonService,
    private toastr: ToastrMsgService,
    private ProductService: ProductService
  ) {
    this.productForm = this.fb.group({
      country: ['', [Validators.required]],
      language: ['', [Validators.required]],
      name: ['', [Validators.required]],
      SKU: ['', [Validators.required]],
      Status: ['', [Validators.required]],
      category: ['', [Validators.required]],
      is_featured: ['', [Validators.required]],
      visible_individually: ['', [Validators.required]],
      Quantity: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      country_origin: ['', [Validators.required]],
      short_description: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      cost: ['', [Validators.required]],
      special_price: ['', [Validators.required]],
      special_price_from: ['', [Validators.required]],
      special_price_to: ['', [Validators.required]],
      videos: ['', [Validators.required]],
      meta_title: ['', [Validators.required]],
      meta_description: ['', [Validators.required]],
      meta_keywords: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.getCountriesList()
    this.activateRoute.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id && this.id != undefined) {
        this.editMode = true
        this.title = "Edit Product"
        this.getProductById()
      } else {
        this.editMode = false
        this.expand = true
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
  addProduct(addpayload: product) {
    this.ProductService.addProduct(addpayload).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Product added successfully", "Product Added")
        this.ngxLoader.stop()
        this.route.navigate(['/product/productlist'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }
  getProductById() {
    this.ProductService.getProductById(this.id).subscribe((res: product) => {
      this.productForm.patchValue({
        country: res.Product_Region.country,
        language: res.Product_Region.language,
        name: res.product_Detail.name,
        SKU: res.product_Detail.SKU,
        Status: res.product_Detail.Status,
        category: res.product_Detail.category,
        is_featured: res.product_Detail.is_featured,
        visible_individually: res.product_Detail.visible_individually,
        Quantity: res.product_Detail.Quantity,
        country_origin: res.manufacturer.country_origin,
        brand: res.manufacturer.brand,
        short_description: res.description.short_description,
        description: res.description.description,
        price: res.price.price,
        cost: res.price.cost,
        special_price: res.price.special_price,
        special_price_from: this.CommonService.convertDate(res.price.special_price_from),
        special_price_to: this.CommonService.convertDate(res.price.special_price_to),
        videos: res.videos,
        meta_title: res.seo.meta_title,
        meta_description: res.seo.meta_description,
        meta_keywords: res.seo.meta_keywords,
      })
      this.Image = res.images

      this.ngxLoader.stop();
    })
  }
  editProduct(editData: product) {
    if (this.imageData && this.imageData != undefined) {
      this.payload['image'] = this.imageData
    }
    this.ProductService.editProduct(editData, this.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Product edit successfully", "Product edit")
        this.ngxLoader.stop()
        this.route.navigate(['/product/productlist'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }

  submitForm() {
    this.SEO = {
      meta_title: this.productForm.controls['meta_description'].value,
      meta_description: this.productForm.controls['meta_title'].value,
      meta_keywords: this.productForm.controls['meta_keywords'].value
    }
    this.prices = {
      price: this.productForm.controls['price'].value,
      cost: this.productForm.controls['cost'].value,
      special_price: this.productForm.controls['special_price'].value,
      special_price_to: this.productForm.controls['special_price_to'].value,
      special_price_from: this.productForm.controls['special_price_from'].value
    }
    this.Description = {
      description: this.productForm.controls['description'].value,
      short_description: this.productForm.controls['short_description'].value
    }
    this.product_region = {
      country: this.productForm.controls['country'].value,
      language: this.productForm.controls['language'].value,
    }

    this.manufacturer = {
      brand: this.productForm.controls['brand'].value,
      country_origin: this.productForm.controls['country_origin'].value
    }
    this.product_details = {
      name: this.productForm.controls['name'].value,
      SKU: this.productForm.controls['SKU'].value,
      category: this.productForm.controls['category'].value,
      Quantity: this.productForm.controls['Quantity'].value,
      is_featured: this.productForm.controls['is_featured'].value,
      Status: this.productForm.controls['Status'].value,
      is_new: true,
      price: this.productForm.controls['price'].value,
      visible_individually: this.productForm.controls['visible_individually'].value
    }
    this.payload = {
      Product_Region: this.product_region,
      product_Detail: this.product_details,
      manufacturer: this.manufacturer,
      description: this.Description,
      price: this.prices,
      seo: this.SEO,
      image: ""
    }
    this.ngxLoader.start();
    if (this.editMode) {
      this.editProduct(this.payload)
    } else {
      this.addProduct(this.payload)
    }
  }
  OnChangesEvent(event) {
    this.imageData = event.target.files[0];
    console.log(event.target.files)
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      this.Image = data.target.result;
      console.log(data.target.result)
    }
  }
  getCountriesList() {
    this.CommonService.getCountries().subscribe((res:any) => {
      this.countryList = res
    })
  }
}
