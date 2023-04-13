import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
@Component({
  selector: 'app-add-feature-product',
  templateUrl: './add-feature-product.component.html',
  styleUrls: ['./add-feature-product.component.scss']
})
export class AddFeatureProductComponent implements OnInit {
  featureForm: FormGroup;
  sidebarSpacing: any;
  title: string = " "
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(private fb: FormBuilder) { 
    this.featureForm = this.fb.group({
      id:['',],
      url: ['', [Validators.required]],
      sortby: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  submitForm(){

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
