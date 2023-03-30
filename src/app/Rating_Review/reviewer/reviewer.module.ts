import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ReviewerComponent } from './reviewer-list/reviewer.component';
import { ReviewerRoutingModule } from './reviewer-routing.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { MatCardModule } from '@angular/material/card';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddEditReviewerComponent } from './add-edit-reviewer/add-edit-reviewer.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [ReviewerComponent, AddEditReviewerComponent,DialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReviewerRoutingModule,
    MultiSelectModule,
    MatCardModule,
    TableModule,
    InputTextareaModule,ConfirmDialogModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class ReviewerModule { }
