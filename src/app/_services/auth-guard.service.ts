import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router: Router, public auth: AuthenticationService) { }

  canActivate(): boolean {
    const token = window.localStorage.getItem('token');

    if (!token) {
      window.localStorage.removeItem('token');
      this.router.navigate(['/']);
      return false
    } else return true
  }
}
