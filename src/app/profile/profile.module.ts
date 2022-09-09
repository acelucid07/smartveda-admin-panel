import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SharedModule as SharedImportsModule } from '../_modules/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileChangePasswordComponent } from './profile-change-password/profile-change-password.component';
import { ProfileBasicInfoComponent } from './profile-basic-info/profile-basic-info.component';



@NgModule({
  declarations: [
    ProfileComponent,
    ProfileChangePasswordComponent,
    ProfileBasicInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    SharedImportsModule
  ]
})
export class ProfileModule { }
