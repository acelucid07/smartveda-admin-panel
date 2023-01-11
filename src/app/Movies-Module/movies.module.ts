import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { ActiveMoviesComponent } from './active-movies/active-movies.component';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component'
@NgModule({
  declarations: [
    ProductListComponent,
    AddEditProductComponent,
    ActiveMoviesComponent,
    AddEditCategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
