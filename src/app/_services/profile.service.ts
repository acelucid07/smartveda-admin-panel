import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserGetRequestParams  } from '../_models/user'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {
    
    constructor(private http: HttpClient){

    }
    getProfile(id: string): Observable<UserGetRequestParams>{
        const endpointUrl = `http://localhost:5000/user/${id}`;
        return this.http.get<UserGetRequestParams>(endpointUrl);
    }
   
}