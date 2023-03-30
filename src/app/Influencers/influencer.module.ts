import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { InfluencerRoutingModule } from './influencer-list.module';
import {MatCardModule} from '@angular/material/card';
import {FileUploadModule} from 'primeng/fileupload';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import {AutoCompleteModule} from 'primeng/autocomplete';
import { InfluencerBasicCostComponent } from './Edit-basic-cost/influencer-basic-cost.component' ;
import { InfluencerCostComponent } from './influencer-cost/influencer-cost.component';
import { AddInfluencerDetailsCsvComponent } from './add-details-csv/add-details-csv.component';

@NgModule({
  declarations: [
    InfluencerBasicCostComponent,
    InfluencerCostComponent,
    AddInfluencerDetailsCsvComponent
  ],
  imports: [
    SharedModule,
    InfluencerRoutingModule,
    CommonModule,
    MatCardModule,
   FileUploadModule,
   NgxUiLoaderModule,
   AutoCompleteModule
  ]
})
export class InfluencerModule { }