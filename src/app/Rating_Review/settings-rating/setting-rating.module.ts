import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingCriteriaComponent } from './rating-criteria/rating-criteria.component';
import { SettingRatingRoutingModule } from './setting-rating-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { MatCardModule } from '@angular/material/card';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddEditRatingCriteriaComponent } from './add-edit-rating-criteria/add-edit-rating-criteria.component';
import { DialogComponent } from './dialog/dialog.component';
// import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RatingCriteriaComponent, AddEditRatingCriteriaComponent,DialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    MultiSelectModule,
    MatCardModule,
    TableModule,
    InputTextareaModule,ConfirmDialogModule,
    MatDialogModule,
    MatButtonModule,
    SettingRatingRoutingModule
  ]
})
export class SettingRatingModule { }
