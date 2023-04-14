import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { CmsService } from '../../../_services/cms.service'
import { FEATURE } from 'src/app/_models/cms';
@Component({
  selector: 'app-add-feature-product',
  templateUrl: './add-feature-product.component.html',
  styleUrls: ['./add-feature-product.component.scss']
})
export class AddFeatureProductComponent implements OnInit {
  featureForm: FormGroup;
  sidebarSpacing: any;
  fgsType: any;
  title: string = " "
  imageChangedEvent: any = '';
  id: any;
  payload: FEATURE;
  image: File;
  editMode: boolean = false
  reg= '([A-Za-z0-9]+)';
  croppedImage: any = '';
  constructor(private ngxLoader: NgxUiLoaderService, private fb: FormBuilder,
    private route: Router,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrMsgService,
    private CmsService: CmsService
    ) {
    this.featureForm = this.fb.group({
      id:[''],
      productName: ['', [Validators.required, Validators.pattern(this.reg)]],
      modal: ['', [Validators.required]],
      price: ['', [Validators.required,Validators.pattern("(\.[0-9]{0,9})?")]],
      quantity: ['', [Validators.required,Validators.pattern("(\[0-9]{0,9})?")]],
    })
    console.log(this.featureForm)
  }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    this.activateRoute.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id && this.id != undefined) {
        this.editMode = true
        this.title = "Edit Feature product"
        this.getFeatureById()
      } else {
        this.editMode = false
        this.title = "Add New Product Name"
      }
    });
  }

  submitForm(){
    this.payload = {
      id: this.featureForm.controls['id'].value,
      productName: this.featureForm.controls['productName'].value,
      image: this.image,
      price: this.featureForm.controls['price'].value,
      quantity: this.featureForm.controls['quantity'].value,
      modal: this.featureForm.controls['modal'].value,
    }

    
  this.ngxLoader.start();
  if (this.editMode) {
  this.editProduct()
  } else {
    this.addproduct()
  }
  this.route.navigate[('/cms/feature')]
  }

  addproduct() {
    this.CmsService.addFeatureProduct(this.featureForm.value).subscribe(res => {
       if (res) {
         this.toastr.showSuccess("Feature Product added successfully", "Product Added")
         this.ngxLoader.stop()
         this.route.navigate(['/cms/feature'])
       }
       (error: any) => {
         this.toastr.showError("Somthing wrong Please check", "Error occured")
         this.ngxLoader.stop()
        // this.route.navigate(['/'])
       }
     })
   }

   editProduct(){
    console.log(this.payload)
    this.CmsService.editFeature(this.featureForm.value, this.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Feature product edit successfully", "Feature edit")
        this.ngxLoader.stop()
        this.route.navigate(['/cms/feature'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
   }

   getFeatureById() {
    this.CmsService.getFeatureById(this.id).subscribe((res: FEATURE) => {
      this.featureForm.patchValue({
        id: res.id,
        productName: res.productName,
       // image: res.image,
        modal: res.modal,
        price: res.price,
        quantity: res.quantity
      })
      this.ngxLoader.stop();
    })
  }

  
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
imageLoaded() {
    / show cropper /
}
cropperReady() {
    / cropper ready /
}
loadImageFailed() {
    / show message /
}
onToggleSidebar(sidebarState: any) {
  if (sidebarState === 'open') {
    this.sidebarSpacing = 'contracted';
  } else {
    this.sidebarSpacing = 'expanded';
  }
}
}
