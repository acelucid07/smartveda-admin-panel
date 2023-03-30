import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBundleComponent } from './create-bundle/create-bundle.component';
import { AddInfluencerCsvComponent } from './add-influencer-csv/add-influencer-csv.component'
import { UploadImageComponent } from './upload-image/upload-image.component';
import { BundleListComponent } from './bundle-list/bundle-list.component';
import { AddInfluencerComponent } from './add-influencer/add-influencer.component';
const routes: Routes = [
  {
    path: 'createbundle', component: CreateBundleComponent
  },
  {
    path: 'uploadimage', component: UploadImageComponent
  },
  {
    path: 'bundlelist', component: BundleListComponent
  },
  {
    path: 'addinfluencers_csv', component: AddInfluencerCsvComponent
  },
  {
    path: 'addinfluencers', component: AddInfluencerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BundleRoutingModule { }
