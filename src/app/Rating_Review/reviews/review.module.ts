import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewListComponent } from './review-list/review-list.component';
import { SharedModule } from '../../shared/shared.module';
import { ReviewRoutingModule } from './review-routing.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddReviewComponent } from './add-review/add-review.component';
import { EditReviewComponent } from './edit-review/edit-review.component';


@NgModule({
  declarations: [ReviewListComponent,DialogComponent, AddReviewComponent,EditReviewComponent],
  exports:[ReviewListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReviewRoutingModule,
    MultiSelectModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class ReviewModule { }
