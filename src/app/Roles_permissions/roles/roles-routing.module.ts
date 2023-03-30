import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolesListComponent } from './roles-list/roles-list.component';
import { AddEditPermissionComponent } from './add-edit-permission/add-edit-permission.component';
 const routes:Routes=[{path:'rolelist', component:RolesListComponent},
{path:'permissionform', component:AddEditPermissionComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RolesRoutingModule { }
