import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCategoryComponent } from './banner/add-edit-category/add-edit-category.component';
import { AddEditSubcategoryComponent } from './banner/add-edit-subcategory/add-edit-subcategory.component';

const routes: Routes = [
  {
    path:'category', component: AddEditCategoryComponent
  },
  {
    path: 'subcategory', component: AddEditSubcategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManagementRoutingModule { }
