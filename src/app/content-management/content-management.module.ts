import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentManagementRoutingModule } from './content-management-routing.module';
import { CategoryComponent } from './banner/category/category.component';
import { SubCategoryComponent } from './banner/sub-category/sub-category.component';
import { SponsorComponent } from './banner/sponsor/sponsor.component';
import { AddEditCategoryComponent } from './banner/add-edit-category/add-edit-category.component';
import { AddEditSubcategoryComponent } from './banner/add-edit-subcategory/add-edit-subcategory.component';
import { AddEditSponsorComponent } from './banner/add-edit-sponsor/add-edit-sponsor.component';
import { SharedModule } from '../shared/shared.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Slider1Component } from './slider/slider1/slider1.component';

@NgModule({
  declarations: [
    CategoryComponent,
    SubCategoryComponent,
    SponsorComponent,
    AddEditCategoryComponent,
    AddEditSubcategoryComponent,
    AddEditSponsorComponent,
    Slider1Component
  ],
  imports: [
    CommonModule,
    ContentManagementRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContentManagementModule { }
