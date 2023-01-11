import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { AllMoviesComponent } from './all-movies-list/all-movies.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { ActiveMoviesComponent } from './active-movies/active-movies.component';
import { AddEditMoviesComponent } from './add-edit-movies/add-edit-movies.component'
@NgModule({
  declarations: [
    AllMoviesComponent,
    AddEditProductComponent,
    ActiveMoviesComponent,
    AddEditMoviesComponent
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
