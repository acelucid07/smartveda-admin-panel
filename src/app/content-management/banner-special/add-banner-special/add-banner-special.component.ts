import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { BANNERSPECIAL } from 'src/app/_models/cms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { CmsService } from '../../../_services/cms.service'
@Component({
  selector: 'app-add-banner-special',
  templateUrl: './add-banner-special.component.html',
  styleUrls: ['./add-banner-special.component.scss']
})
export class AddBannerSpecialComponent implements OnInit {

  sidebarSpacing: any;
  title: string = " "
  bannerSpecialForm: FormGroup;
  fgsType: any;
  image: File;
  status= false;
  id: any;
  editMode: boolean = false
  payload: BANNERSPECIAL
  imageChangedEvent: any = '';
  croppedImage: any = '';
  reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  constructor(private ngxLoader: NgxUiLoaderService, private fb: FormBuilder,
    private route: Router,
    private activateRoute: ActivatedRoute,
    private toastr: ToastrMsgService,
    private CmsService: CmsService
    ) {
      this.bannerSpecialForm = this.fb.group({
        id:['',],
        url: ['', [Validators.required, Validators.pattern(this.reg)]],
        sortby: ['', [Validators.pattern("^[1-5]\d*$")]],
        description: ['', [Validators.required]],
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
        this.title = "Edit Special Banner"
        this.getBannerById();
      } else {
        this.editMode = false
        this.title = "Add New Special Banner"
      }
    });

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

  submitForm(){
   this.payload = {
    id: this.bannerSpecialForm.controls['id'].value,
    url: this.bannerSpecialForm.controls['url'].value,
    image: this.image,
    description: this.bannerSpecialForm.controls['description'].value,
    sortby: this.bannerSpecialForm.controls['sortby'].value,
  }
 
  this.ngxLoader.start();
  if (this.editMode) {
  this.editBanner();
  } else {
    this.addCategory()
  }
  this.route.navigate[('/cms/banner')]
  
  }

  addCategory() {
    this.CmsService.addSpecialBanner(this.bannerSpecialForm.value).subscribe(res => {
       if (res) {
         this.toastr.showSuccess("Special banner added successfully", "banner Added")
         this.ngxLoader.stop()
         this.route.navigate(['/cms/banner'])
       }
       (error: any) => {
         this.toastr.showError("Somthing wrong Please check", "Error occured")
         this.ngxLoader.stop()
        this.route.navigate(['/'])
       }
     })
   }

   editBanner(){
    console.log(this.payload)
    this.CmsService.editSpecialBanner(this.bannerSpecialForm.value, this.id).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Banner edit successfully", "banner edit")
        this.ngxLoader.stop()
        this.route.navigate(['/cms/banner'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
   }

   getBannerById() {
    this.CmsService.getBannerById(this.id).subscribe((res: BANNERSPECIAL) => {
      this.bannerSpecialForm.patchValue({
        id: res.id,
        url: res.url,
       // image: res.image,
        sortby: res.sortby,
        description: res.description
      })
      this.ngxLoader.stop();
    })
  }
}
