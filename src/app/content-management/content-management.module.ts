import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentManagementRoutingModule } from './content-management-routing.module';
import { CategoryComponent } from './banner/category/category.component';
import { SubCategoryComponent } from './banner/sub-category/sub-category.component';
import { SponsorComponent } from './banner/sponsor/sponsor.component';


@NgModule({
  declarations: [
    CategoryComponent,
    SubCategoryComponent,
    SponsorComponent
  ],
  imports: [
    CommonModule,
    ContentManagementRoutingModule
  ]
})
export class ContentManagementModule { }
