import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list/admin-list.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddEditAdminComponent } from './add-edit-admin/add-edit-admin.component';
import { CustomerListComponent } from 'src/app/customer/customer-list/customer-list.component';

const routes:Routes=[{path:'adminlist', component:CustomerListComponent},
{path:'adminform', component:AddEditAdminComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminListRoutingModule { }
