import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { CATEGORY, SUB_CATEGORY, SPONSOR } from '../_models/cms'
import { users } from '../DummyData/user';
import { queryList } from '../DummyData/query';

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
    getQueryList(): Observable<any[]>{
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category`;
        // return this.http.get<CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
        return of(queryList)
    }

    resolveQuery(id:number){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl =`${environment.JSON_SERVER}/category/${id}`;

        let categoryObj = queryList.map(item =>{
            let dateHolder = new Date()
            let dateString = dateHolder.toISOString()
            console.log(dateString.split('T')[0])
            if (item.queryid == id) {
                item.status = "resolved";
                item.resolvedDate = dateString.split('T')[0]
            }
            return item
        })
        return of(categoryObj)
    }
    revertQuery(id:number){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl =`${environment.JSON_SERVER}/category/${id}`;

        let categoryObj = queryList.map(item =>{
            if (item.queryid == id) {
                item.status = "pending";
                item.resolvedDate ="Null"
            }
            return item
        })
        return of(categoryObj)
    }
    // queryDetails(id: number){
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
    //     //return this.http.delete<CATEGORY>(endpointUrl, { 'headers': httpOptions });
    //     let categoryObj = querycontent.filter(item =>item.queryid == id)
    //     // users.splice(users.findIndex((index) => index.id == id),1);
    //     return of(categoryObj[0])
    // }

    // queryDetailsList(){
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/category/`;
    //     //return this.http.delete<CATEGORY>(endpointUrl, { 'headers': httpOptions });
    //     // let categoryObj = querycontent.filter(item =>item.queryid == id)
    //     // users.splice(users.findIndex((index) => index.id == id),1);
    //     return of(querycontent)
    // }

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