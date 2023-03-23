import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list/admin-list.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddEditAdminComponent } from './add-edit-admin/add-edit-admin.component';

const routes:Routes=[{path:'adminlist', component:AdminListComponent},
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
