import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveMoviesComponent } from './active-movies/active-movies.component';
import { AllMoviesComponent } from './all-movies-list/all-movies.component'

const routes: Routes = [
  {
    path: 'all-movies', component: AllMoviesComponent
  },
  {
    path: 'active-movies', component: ActiveMoviesComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
