import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { CATEGORY, SUB_CATEGORY, SPONSOR } from '../_models/cms'
import { users } from '../DummyData/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUserList(): Observable<any[]> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category`;
        // return this.http.get<CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
        return of(users)
    }
    deleteUser(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
        //return this.http.delete<CATEGORY>(endpointUrl, { 'headers': httpOptions });
        let categoryObj = users.map(item => {
          if(item.id == id)
            item.status= false
            return item
        })
        // users.splice(users.findIndex((index) => index.id == id),1);
        return of(categoryObj)
    }

    retrieveUser(id:number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl =`${environment.JSON_SERVER}/category/${id}`;

        let categoryObj = users.map(item =>{
            if(item.id == id)
            item.status = true
            return item
        })
        return of(categoryObj)
    }

    addUser(data: any) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/`;
        //return this.http.delete<CATEGORY>(endpointUrl, { 'headers': httpOptions });
        data.status=true
        users.push(data);
        return of(users)
    }

    editUser(data: any) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/`;
        //return this.http.delete<CATEGORY>(endpointUrl, { 'headers': httpOptions });
        users.map(item => {
          if(item.id == data.id)
          {
            item.name=data.name
            item.email=data.email
            item.phone=data.phone
            item.role=data.role
          }  
        })
        // users.splice(users.findIndex((index) => index.id == data.id),1);
        // users.push(data)
        return of(users)
    }

}