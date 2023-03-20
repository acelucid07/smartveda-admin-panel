import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingListComponent } from './rating-list/rating-list.component';
import { RatingRoutingModule } from './rating-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {MultiSelectModule} from 'primeng/multiselect';
import { ExportDialogComponent } from './export-dialog/export-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddRatingComponent } from './add-rating/add-rating.component'
import { MatCardModule } from '@angular/material/card';
import { RatingModule } from 'primeng/rating';
import { EditRatingComponent } from './edit-rating/edit-rating.component';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
     RatingListComponent,
     ExportDialogComponent,
     AddRatingComponent,
     EditRatingComponent,
     DialogComponent],
  imports: [
    CommonModule,
    RatingRoutingModule,
    SharedModule,
    MultiSelectModule,
    MatDialogModule,
    MatButtonModule,
    MultiSelectModule,
    MatCardModule,
    RatingModule, MatButtonModule
  ]
})
export class AdminRatingModule { }
