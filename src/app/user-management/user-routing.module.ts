import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-edit-user.component';
import { QueryContentComponent } from './query-content/query-content.component';
import { QueryListComponent } from './query-list/query-list.component';
import { UserListComponent } from './user-list/user-list.component';
const routes:Routes=[
{path:"userlist" ,component:UserListComponent},
{path:"createuser", component:CreateUserComponent},
{path:"querylist", component:QueryListComponent},
{path:"querycontent", component:QueryContentComponent},
]

@NgModule({
imports:[RouterModule.forChild(routes)],
})

export class UserRoutingModule { }