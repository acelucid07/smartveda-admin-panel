import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCategoryComponent } from './banner/add-edit-category/add-edit-category.component';
import { AddEditSubcategoryComponent } from './banner/add-edit-subcategory/add-edit-subcategory.component';
import { CategoryComponent } from './banner/category/category.component';
import { SubCategoryComponent } from './banner/sub-category/sub-category.component';
import { SponsorComponent } from './banner/sponsor/sponsor.component';
import {AddEditSponsorComponent} from './banner/add-edit-sponsor/add-edit-sponsor.component';
import { Slider1Component } from './slider/slider1/slider1.component';
import { BannerSpecialComponent } from './banner-special/banner-special/banner-special.component';
import { AddBannerSpecialComponent } from './banner-special/add-banner-special/add-banner-special.component';
import { FeatureProductListComponent } from './feature-product/feature-product-list/feature-product-list.component';
import { AddFeatureProductComponent } from './feature-product/add-feature-product/add-feature-product.component';
const routes: Routes = [
  {
    path:'category', component: CategoryComponent
  },
  {
    path: 'subcategory', component: SubCategoryComponent
  },
  {
    path: 'sponsor', component: SponsorComponent
  },
  {
    path:'editcategory', component: AddEditCategoryComponent
  },
  {
    path: 'editsubcategory', component: AddEditSubcategoryComponent
  },
  {
    path: 'editsponsor', component: AddEditSponsorComponent
  },
  {
    path:'addcategory', component: AddEditCategoryComponent
  },
  {
    path: 'addsubcategory', component: AddEditSubcategoryComponent
  },
  {
    path: 'addsponsor', component: AddEditSponsorComponent
  },
  {
    path: 'slider', component: Slider1Component
  },
  {
    path: 'banner', component: BannerSpecialComponent
  },
  {
    path: 'add-special-banner', component: AddBannerSpecialComponent
  },
  {
    path: 'feature', component: FeatureProductListComponent
  },
  {
    path: 'add-featured-product', component: AddFeatureProductComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManagementRoutingModule { }
