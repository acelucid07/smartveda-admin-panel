import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListComponent } from './leads-list.component';
import { LeadsRoutingModule } from './leads-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LeadsListComponent],
  imports: [
    CommonModule,
    LeadsRoutingModule,SharedModule
  ]
})
export class LeadsModule { }
