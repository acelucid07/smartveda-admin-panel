import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BundleService } from 'src/app/_services/bundle.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
// import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
// import { Table } from 'primeng/table';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  sidebarSpacing: String;
  image: File;
  bundleName: String;
  URL: any;
  id: any;
  constructor(private bundleService: BundleService,
    private activateRoute: ActivatedRoute,
    private ngxLoader: NgxUiLoaderService,
    private route: Router,
    private toastr: ToastrMsgService) { }
  
    ngOnInit(): void {
    this.sidebarSpacing = 'contracted';
    this.activateRoute.queryParamMap.subscribe(params => {
      this.bundleName = params.get('categoryName');
    });
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  OnChangesEvent(event) {
    this.image = event.target.files[0];
    console.log(event.target.files)
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      this.URL = data.target.result;
      console.log(data.target.result)
    }
  }

  submitImage() {
    this.ngxLoader.start()
    this.addImage()
  }

  addImage() {
    this.bundleService.uploadImage(this.image, this.bundleName).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("Image added successfully", "Image Added")
        this.ngxLoader.stop()
        this.route.navigate(['/bundle/bundlelist'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/'])
      }
    })
  }
}