import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component'

const routes: Routes = [
  {
    path: 'editProduct', component: AddEditProductComponent
  },
  {
    path: 'addProduct', component: AddEditProductComponent
  },
  {
    path: 'productlist', component: ProductListComponent
  },
  {
    path: 'categorylist', component: CategoryListComponent
  },
  {
    path: 'editcategory', component: AddEditCategoryComponent
  },
  {
    path: 'addcategory', component: AddEditCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
