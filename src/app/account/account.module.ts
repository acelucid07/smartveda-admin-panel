import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
// import { LayoutComponent } from './layout.component';
// import { LoginComponent } from '../authentication/login/login.component';
// import { RegisterComponent } from '../authentication/register/register.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        // LoginComponent,
        // RegisterComponent
    ]
})
export class AccountModule { }