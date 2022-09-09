import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { LayoutComponent } from '../authentication/login/login.component';
import { LoginComponent } from '../authentication/login/login.component';
import { RegisterComponent } from '../authentication/register/register.component';

const routes: Routes = [
    {
        path: '', component: LoginComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }