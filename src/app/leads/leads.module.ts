import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListComponent } from './leads-list/leads-list.component';
import { LeadsRoutingModule } from './leads-routing.module';
import { SharedModule } from '../shared/shared.module';
import {MultiSelectModule} from 'primeng/multiselect';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [LeadsListComponent],
  imports: [
    CommonModule,
    LeadsRoutingModule,SharedModule,
    MultiSelectModule,
    TableModule
  ]
})
export class LeadsModule { }
