import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list/admin-list.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { CustomerListComponent } from 'src/app/customer/customer-list/customer-list.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';

const routes:Routes=[{path:'adminlist', component:AdminListComponent},
{path:'adminform', component:AddAdminComponent},
{path:'editAdmin', component:EditAdminComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminListRoutingModule { }
