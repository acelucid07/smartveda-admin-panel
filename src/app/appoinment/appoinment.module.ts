import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppoinmentRoutingModule } from './appoinment-routing.module';
import { AppoinmentListComponent } from './appoinment-list/appoinment-list.component';
import { SharedModule } from '../shared/shared.module';
import { AddEditAppoinmentComponent } from './add-edit-appoinment/add-edit-appoinment.component';


@NgModule({
  declarations: [
    AppoinmentListComponent,
    AddEditAppoinmentComponent
  ],
  imports: [
    CommonModule,
    AppoinmentRoutingModule,
    SharedModule
  ]
})
export class AppoinmentModule { }
