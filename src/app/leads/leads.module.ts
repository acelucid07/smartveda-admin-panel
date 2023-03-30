import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadCreateComponent } from './lead-create/lead-create.component';
import { LeadsListComponent } from './leads-list/leads-list.component';
import { LeadsRoutingModule } from './leads-routing.module';
import { SharedModule } from '../shared/shared.module';
import {MultiSelectModule} from 'primeng/multiselect';
import {TableModule} from 'primeng/table';
import { MatCardModule } from '@angular/material/card';
import { LeadEditComponent } from './lead-edit/lead-edit.component';
import { LeadViewComponent } from './lead-view/lead-view.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [LeadsListComponent,LeadCreateComponent,LeadEditComponent, LeadViewComponent,DialogComponent],
  imports: [
    CommonModule,
    LeadsRoutingModule,SharedModule,
    MultiSelectModule,
    MatCardModule,
    TableModule,
    InputTextareaModule,ConfirmDialogModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class LeadsModule { }
