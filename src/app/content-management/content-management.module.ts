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


@NgModule({
  declarations: [
    CategoryComponent,
    SubCategoryComponent,
    SponsorComponent,
    AddEditCategoryComponent,
    AddEditSubcategoryComponent,
    AddEditSponsorComponent
  ],
  imports: [
    CommonModule,
    ContentManagementRoutingModule,
    SharedModule
  ]
})
export class ContentManagementModule { }
