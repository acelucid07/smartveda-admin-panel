import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserGetRequestParams  } from '../_models/user'
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
    
    constructor(private http: HttpClient){

    }
    getUsers(): any {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token',token) 
        const endpointUrl = 'http://3.110.155.54:5000//users';
        return this.http.get(endpointUrl,{'headers':httpOptions}).pipe(map(res => res));
    }
   
}