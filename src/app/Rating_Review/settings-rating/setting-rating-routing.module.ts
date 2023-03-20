import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RatingCriteriaComponent } from './rating-criteria/rating-criteria.component';
import { AddEditRatingCriteriaComponent } from './add-edit-rating-criteria/add-edit-rating-criteria.component';

const routes: Routes = [
  { path: 'ratingcriterialist', component: RatingCriteriaComponent },
  { path: 'ratingcriteriaform', component: AddEditRatingCriteriaComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingRatingRoutingModule { }
