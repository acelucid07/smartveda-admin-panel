
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, Signup } from '../_models/authentication'
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    
    constructor(private http: HttpClient){

    }

    signup(payload: Signup){
        const endpointUrl = 'http://localhost:5000/signup';
        return this.http.post(endpointUrl, payload);
    }
    
    login(payload: Login): Observable<any>{
        const endpointUrl = 'http://localhost:5000/login';
        return this.http.post(endpointUrl, payload);
    }

    forgetPassword(){

    }
}