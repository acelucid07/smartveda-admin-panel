import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { SharedModule as SharedImportsModule } from '../_modules/shared.module';
import { AngularMaterialModule } from '../_modules/angular-material.module';
import { QuibUserComponent } from './quib-user/quib-user.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    UpdateCustomerComponent,
    QuibUserComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    SharedImportsModule,
    ConfirmDialogModule,
    AngularMaterialModule,
    
  ]
})

export class CustomerModule { }
