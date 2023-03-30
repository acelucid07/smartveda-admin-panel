import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {FileUploadModule} from 'primeng/fileupload';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { CreateUserComponent } from './create-user/create-edit-user.component';
import { QueryListComponent } from './query-list/query-list.component';
import { ChipModule } from 'primeng/chip'
import { QueryContentComponent } from './query-content/query-content.component';
import {DividerModule} from 'primeng/divider';
import {ContextMenuModule} from 'primeng/contextmenu';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MenuModule} from 'primeng/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    UserListComponent,
    CreateUserComponent,
    QueryListComponent,
    QueryContentComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    CommonModule,
    MatCardModule,
    FileUploadModule,
    NgxUiLoaderModule,
    ChipModule,
    DividerModule,
    ContextMenuModule,
    SplitButtonModule,
    MenuModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class UserModule { }