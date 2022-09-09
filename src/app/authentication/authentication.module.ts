import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../_modules/shared.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationSignupComponent } from './authentication-signup/authentication-signup.component';
import { ContentComponent } from './content/content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, ActivatedRoute } from '@angular/router';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthenticationComponent,
    AuthenticationSignupComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class AuthenticationModule { }
