import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { leads } from '../DummyData/lead';

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
    // downloadFile():Observable<any[]>{
    //     const token =localStorage.getItem('token') ||''
    // }

}

