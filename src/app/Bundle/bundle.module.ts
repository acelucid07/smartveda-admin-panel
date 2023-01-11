import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BundleRoutingModule } from './bundle-routing.module';
import { CreateBundleComponent } from './create-bundle/create-bundle.component';
import { AddInfluencerComponent } from './add-influencer/add-influencer.component'
import {MatCardModule} from '@angular/material/card';
import { UploadImageComponent } from './upload-image/upload-image.component';
import {FileUploadModule} from 'primeng/fileupload';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { BundleListComponent } from './bundle-list/bundle-list.component';

@NgModule({
  declarations: [
    CreateBundleComponent,
    AddInfluencerComponent,
    UploadImageComponent,
    BundleListComponent
  ],
  imports: [
    SharedModule,
    BundleRoutingModule,
    CommonModule,
    MatCardModule,
   FileUploadModule,
   NgxUiLoaderModule
  ]
})
export class BundleModule { }