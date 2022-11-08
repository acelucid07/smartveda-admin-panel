import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ProductService } from 'src/app/_services/product.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { product, product_region, product_details, brands, Description, prices, SEO ,Satatus} from 'src/app/_models/catalog'
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
  payload: product;
  product_region: product_region
  product_details: product_details
  brands: brands
  prices: prices
  SEO: SEO
  Status = Satatus
  Description: Description
  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private ngxLoader: NgxUiLoaderService,
    private route: Router,
    private toastr: ToastrMsgService,
    private ProductService: ProductService
  ) {
    this.productForm = this.fb.group({
      country: ['', [Validators.required]],
      language: ['', [Validators.required]],
      name: ['', [Validators.required]],
      sku: ['', [Validators.required]],
      status: ['', [Validators.required]],
      category: ['', [Validators.required]],
      featured: ['', [Validators.required]],
      visible_individually: ['', [Validators.required]],
      Quantity: ['', [Validators.required]],
      brands: ['', [Validators.required]],
      country_origin: ['', [Validators.required]],
      short_description: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      cost: ['', [Validators.required]],
      special_price: ['', [Validators.required]],
      special_price_from: ['', [Validators.required]],
      special_price_to: ['', [Validators.required]],
      images: ['', [Validators.required]],
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
  addProduct(addpayload:product) {
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
    this.ProductService.getProductById(parseInt(this.id)).subscribe((res: any) => {
      this.productForm.patchValue({
        country: res.Product_Region.country,
        language: res.Product_Region.language,
        name: res.product_Detail.name,
        sku: res.product_Detail.sku,
        status: res.product_Detail.status,
        category: res.product_Detail.category,
        featured: res.product_Detail.featured,
        visible_individually: res.product_Detail.visible_individually,
        Quantity: res.product_Detail.Quantity,
        brands: res.brand.brands,
        country_origin: res.brand.country_origin,
        short_description: res.description.short_description,
        description: res.description.description,
        price: res.price.price,
        cost: res.price.cost,
        special_price: res.price.special_price,
        special_price_from: res.price.special_price_from,
        special_price_to: res.price.special_price_to,
        images: res.images,
        videos: res.videos,
        meta_title: res.seo.meta_title,
        meta_description: res.seo.meta_description,
        meta_keywords: res.seo.meta_keywords,
      })
      console.log(this.productForm.value)
      this.ngxLoader.stop();
    })
  }
  editProduct(editData:product) {
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

    this.brands = {
      brands: this.productForm.controls['brands'].value,
      country_origin: this.productForm.controls['country_origin'].value
    }
    this.product_details = {
      name: this.productForm.controls['name'].value,
      sku: this.productForm.controls['sku'].value,
      category: this.productForm.controls['category'].value,
      Quantity: this.productForm.controls['Quantity'].value,
      featured: this.productForm.controls['featured'].value,
      status: this.productForm.controls['status'].value,
      new: false,
      visible_individually: this.productForm.controls['visible_individually'].value
    }
    this.payload = {
      id: parseInt(this.id),
      Product_Region: this.product_region,
      product_Detail: this.product_details,
      brand: this.brands,
      description: this.Description,
      price: this.prices,
      images: this.productForm.controls['images'].value,
      videos: this.productForm.controls['videos'].value,
      seo: this.SEO
    }
    this.ngxLoader.start();
    if (this.editMode) {
      this.editProduct(this.payload)
    } else {
      this.addProduct(this.payload)
    }
  }
}
