import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserGetRequestParams } from '../_models/user'
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UsersService {

    constructor(private http: HttpClient) {

    }
    getUsers(): any {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.BASE_URL}/users`;
        return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    }

    downloadFile(): Observable<any> {
        return this.http.get(`${environment.BASE_URL}/downloadcsv`, { responseType: "blob" });
    }
}