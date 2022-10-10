import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserGetRequestParams  } from '../_models/user'
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {
    
    constructor(private http: HttpClient){

    }
    getProfile(id: string): Observable<UserGetRequestParams>{
        const endpointUrl = `http://3.110.155.54:5000/user/${id}`;
        return this.http.get<UserGetRequestParams>(endpointUrl);
    }
   
    updateCustomerProfile(data: UserGetRequestParams): Observable<UserGetRequestParams> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token',token) 
        const endpointUrl = `http://3.110.155.54:5000/update/${data.id}`;
        return this.http.put<UserGetRequestParams>(endpointUrl,data, {'headers':httpOptions});
    }
    deleteCustomerProfile(id:string): Observable<UserGetRequestParams>{
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `http://3.110.155.54:5000/delete/${id}`;
        return this.http.put<UserGetRequestParams>(endpointUrl, {'headers': httpOptions})
    }
}