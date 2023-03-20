import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RatingListComponent } from './rating-list/rating-list.component';
import { AddRatingComponent } from './add-rating/add-rating.component';
import { EditRatingComponent } from './edit-rating/edit-rating.component';

const routes:Routes=[{path:'ratinglist', component:RatingListComponent},
{path:'addrating', component:AddRatingComponent},
{path:'editrating', component:EditRatingComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RatingRoutingModule { }
