
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../_models/authentication'
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    
    constructor(private http: HttpClient){

    }
    
    login(payload: Login): Observable<any>{
        const endpointUrl = 'http://localhost:5000/adminlogin';
        return this.http.post(endpointUrl, payload);
    }

    forgetPassword(){

    }
}