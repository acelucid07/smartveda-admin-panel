import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { AllMoviesComponent } from './all-movies-list/all-movies.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { ActiveMoviesComponent } from './active-movies/active-movies.component';
@NgModule({
  declarations: [
    AllMoviesComponent,
   ActiveMoviesComponent,
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
