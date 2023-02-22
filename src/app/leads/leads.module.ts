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

import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [LeadsListComponent,LeadCreateComponent,LeadEditComponent, LeadViewComponent],
  imports: [
    CommonModule,
    LeadsRoutingModule,SharedModule,
    MultiSelectModule,
    MatCardModule,
    TableModule,
    InputTextareaModule
  ]
})
export class LeadsModule { }
