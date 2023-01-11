import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBundleComponent } from './create-bundle/create-bundle.component';
import { AddInfluencerComponent } from './add-influencer/add-influencer.component'
import { UploadImageComponent } from './upload-image/upload-image.component';
import { BundleListComponent } from './bundle-list/bundle-list.component';
const routes: Routes = [
  {
    path: 'createbundle', component: CreateBundleComponent
  },
  {
    path: 'addinfluencers', component: AddInfluencerComponent
  },
  {
    path: 'uploadimage', component: UploadImageComponent
  },
  {
    path: 'bundlelist', component: BundleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BundleRoutingModule { }
