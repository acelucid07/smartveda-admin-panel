import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserGetRequestParams  } from '../_models/user'
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {
    
    constructor(private http: HttpClient){

    }
    getProfile(id: string): Observable<UserGetRequestParams>{
        const endpointUrl = `http://13.126.212.31:5000/user/${id}`;
        return this.http.get<UserGetRequestParams>(endpointUrl);
    }
   
    updateCustomerProfile(data: UserGetRequestParams): Observable<UserGetRequestParams> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token',token) 
        const endpointUrl = `http://13.126.212.31:5000/update/${data.id}`;
        return this.http.put<UserGetRequestParams>(endpointUrl,data, {'headers':httpOptions});
    }

    deleteCustomerProfile(data:UserGetRequestParams): Observable<UserGetRequestParams>{
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `http://13.126.212.31:5000/delete/${data._id}`;
        return this.http.put<UserGetRequestParams>(endpointUrl, data,{'headers': httpOptions})
    }
}