import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { leadDetails,leads, followUp } from '../DummyData/lead';

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
    getLeadsDetails(name:string):Observable<any[]>{
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token',token);
        const endpointUrl = `${environment.JSON_SERVER}/leadlist`
        let filteredData = leadDetails.filter((data)=>{

                return data.name==name
              
        })
        return of(filteredData)
}

    submitLeadData(data:any):Observable<any[]>{
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token',token);
        const endpointUrl = `${environment.JSON_SERVER}/leadlist`
        // return this.http.post<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
        // leads.push(payload);
        // console.log(data)
        let payloadData= Object.assign({}, data)
        leadDetails.push(data)
        let date= new Date()
        
        console.log(data.followUpDate)
        payloadData.id = leads.length+1;
        payloadData.status ="Active"
        payloadData.deal ="Hot"
        payloadData.startDate=date.toISOString().split('T')[0];
        payloadData.followUpDate= new Date(payloadData.followUpDate.getTime()+1000*60*60*24)
        // console.log( payloadData.followUpDate)
        payloadData.followUpDate= payloadData.followUpDate.toISOString().split('T')[0]
        delete payloadData.contactNumber
        delete payloadData.pinCode
        delete payloadData.stateName
        delete payloadData.cityName
        // console.log( )
        leads.push(payloadData)
        return of(leads)
    }

    submitFollowDetails(data:any){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token',token);
        const endpointUrl = `${environment.JSON_SERVER}/leadlist`
        // return this.http.post<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
        // leads.push(payload);
        followUp.push(data);
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

