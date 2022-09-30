import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { AngularMaterialModule } from '../_modules/angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION,PB_DIRECTION, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader'
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    SidenavComponent,
    HeaderComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FontAwesomeModule,
    NgxUiLoaderModule,
    ButtonModule
  ],
  exports: [
    HeaderComponent,
    NgxUiLoaderModule,
    ButtonModule
  ]
})
export class SharedModule { 
  NgxUiLoaderConfig: NgxUiLoaderConfig =
  {
    "bgsColor": "rgba(15,1,1,0.99)",
    "bgsOpacity": 0.5,
    "bgsPosition": "bottom-right",
    "bgsSize": 60,
    "bgsType": "square-loader",
    "blur": 5,
    "delay": 0,
    "fastFadeOut": true,
    "fgsColor": "rgba(15,1,1,0.99)",
    "fgsPosition": "center-center",
    "fgsSize": 60,
    "fgsType": "square-loader",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": "rgba(40, 40, 40, 0.8)",
    "pbColor": "rgba(15,1,1,0.99)",
    "pbDirection": "ltr",
    "pbThickness": 2,
    "hasProgressBar": true,
    "text": "",
    "textColor": "#FFFFFF",
    "textPosition": "center-center",
    "maxTime": -1,
    "minTime": 300
  }
}
