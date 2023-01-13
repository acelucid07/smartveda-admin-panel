import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { AngularMaterialModule } from '../_modules/angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxUiLoaderModule, NgxUiLoaderConfig } from 'ngx-ui-loader'
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ToastrModule } from 'ngx-toastr';
import { AccordionModule } from 'primeng/accordion'
import {PanelMenuModule} from 'primeng/panelmenu';
import {CardModule} from 'primeng/card';
import { CKEditorModule } from 'ckeditor4-angular';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {DialogModule} from 'primeng/dialog';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
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
    ButtonModule,
    ChartModule,
    InputTextModule,
    DropdownModule,
    TooltipModule,
    TableModule,
    PanelMenuModule,
    CardModule,
    CKEditorModule,
    MatExpansionModule,
    DialogModule,
    MatDividerModule,
    MatTabsModule,
    CheckboxModule,
    MatCheckboxModule,
    ConfirmDialogModule,
    ToastrModule.forRoot({
      timeOut: 300,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  exports: [
    HeaderComponent,
    NgxUiLoaderModule,
    ButtonModule,
    ChartModule,
    InputTextModule,
    DropdownModule,
    TooltipModule,
    TableModule,
    ToastrModule,
    AccordionModule,
    PanelMenuModule,
    CardModule,
    CKEditorModule,
    MatExpansionModule,
    MatDividerModule,
    MatTabsModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    CheckboxModule,
    MatCheckboxModule,
    ConfirmDialogModule
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
