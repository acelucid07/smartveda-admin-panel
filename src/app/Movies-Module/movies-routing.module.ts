import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditMoviesComponent } from './add-edit-movies/add-edit-movies.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { ActiveMoviesComponent } from './active-movies/active-movies.component';
import { AllMoviesComponent } from './all-movies-list/all-movies.component'

const routes: Routes = [
  {
    path: 'editProduct', component: AddEditProductComponent
  },
  {
    path: 'addProduct', component: AddEditProductComponent
  },
  {
    path: 'all-movies', component: AllMoviesComponent
  },
  {
    path: 'active-movies', component: ActiveMoviesComponent
  },
  {
    path: 'editmovies', component: AddEditMoviesComponent
  },
  {
    path: 'addmovies', component: AddEditMoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
