import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReviewerComponent } from './reviewer-list/reviewer.component';
import { AddEditReviewerComponent } from './add-edit-reviewer/add-edit-reviewer.component';

const routes:Routes=[
  {path:'reviewerlist', component:ReviewerComponent},
  {path:'reviewerform', component:AddEditReviewerComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReviewerRoutingModule { }
