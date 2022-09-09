import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AngularMaterialModule } from '../_modules/angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    AngularMaterialModule,
    FontAwesomeModule,
    AgGridModule.withComponents([])
  ]
})
export class DashboardModule { }
