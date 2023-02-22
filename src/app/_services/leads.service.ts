import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { leads, followUp } from '../DummyData/lead';

@Injectable({
    providedIn: 'root'
})

export class LeadService{

    constructor(private http:HttpClient){
    }
        
    getLeadsList():Observable<any[]>{
            const token = localStorage.getItem('token') || '';
            let httpOptions = new HttpHeaders().set('x-access-token',token);
            const endpointUrl = `${environment.JSON_SERVER}/leadlist`
            return of(leads)
    }

    submitLeadData(payload:any):Observable<any[]>{
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token',token);
        const endpointUrl = `${environment.JSON_SERVER}/leadlist`
        // return this.http.post<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
        // leads.push(payload);
        return of(leads)
    }

    submitLeadEditData(payload:any):Observable<any[]>{
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token',token);
        const endpointUrl = `${environment.JSON_SERVER}/leadlist`
        // return this.http.post<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
        // leads.push(payload);
        return of(leads)
    }
   
    getFollowUpDetails(id:string){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token',token);
        const endpointUrl = `${environment.JSON_SERVER}/leadlist`
        // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
        // leads.push(payload);
        return of(followUp)
    }
   
    deleteLeadDetails(id:number)
    {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token',token);
        const endpointUrl = `${environment.JSON_SERVER}/leadlist`
        // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
        // leads.push(payload);
       let filteredlead = leads.splice(leads.findIndex((index) => index.id == id),1);
        return of(filteredlead)
    }
   
    // downloadFile():Observable<any[]>{
    //     const token =localStorage.getItem('token') ||''
    // }

}

