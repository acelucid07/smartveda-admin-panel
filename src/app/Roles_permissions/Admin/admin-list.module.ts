import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListRoutingModule } from './admin-list-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';
import { SharedModule } from '../../shared/shared.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { MatCardModule } from '@angular/material/card';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { DialogComponent } from './dialog/dialog.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {MatIconModule} from '@angular/material/icon';
import { CustomerListComponent } from 'src/app/customer/customer-list/customer-list.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditSuperAdminComponent } from './edit-super-admin/edit-super-admin.component';


@NgModule({
  declarations: [AdminListComponent, AddAdminComponent,
    DialogComponent,
  CustomerListComponent,
  EditAdminComponent,
  EditSuperAdminComponent],
  imports: [
    CommonModule,
    AdminListRoutingModule,
    SharedModule,
    MultiSelectModule,
    MatCardModule,
    TableModule,
    InputTextareaModule,
    ConfirmDialogModule,
    MatDialogModule,
    MatButtonModule,
    InputNumberModule,
    MatIconModule
  ]
})
export class AdminListModule { }
