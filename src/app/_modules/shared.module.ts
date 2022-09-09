import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
		ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
		ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
