import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { AngularMaterialModule } from '../_modules/angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
