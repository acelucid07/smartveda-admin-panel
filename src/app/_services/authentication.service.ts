
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../_models/authentication'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient) {

    }

    login(payload: Login): Observable<any> {
        const endpointUrl = `${environment.BASE_URL}/login`;
        return this.http.post(endpointUrl, payload);
    }

    forgetPassword() {

    }
}