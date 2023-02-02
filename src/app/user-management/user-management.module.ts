import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {FileUploadModule} from 'primeng/fileupload';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { CreateUserComponent } from './create-user/create-edit-user.component';


@NgModule({
  declarations: [
    UserListComponent,
    CreateUserComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    CommonModule,
    MatCardModule,
   FileUploadModule,
   NgxUiLoaderModule
  ]
})
export class UserModule { }