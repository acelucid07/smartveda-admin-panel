import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserTypeComponent } from './usertype-list/usertype.component';
import { AddEditUserTypeComponent } from './add-edit-usertype/add-edit-usertype.component';

const routes: Routes = [
  { path: 'usertypelist', component: UserTypeComponent },
  { path: 'usertypeform', component: AddEditUserTypeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingUsertypeRoutingModule { }
