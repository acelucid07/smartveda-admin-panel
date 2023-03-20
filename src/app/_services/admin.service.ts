import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { adminlistData } from '../DummyData/adminData';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) {}

   getAdminList():Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token',token);
    const endpointUrl = `${environment.JSON_SERVER}/reviewlist`
    // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
    return of(adminlistData)
  }

  getAdminDetails(serialno:number):Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token',token);
    const endpointUrl = `${environment.JSON_SERVER}/reviewDetail`
    // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
    
    // console.log(ratingCriteriaList)
    let filteredValue=adminlistData.filter(val=>{
      return (val.sno == serialno)
    })
    return of(filteredValue)
    }

  submitAdminDetail(payload:any):Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOption = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/add`;
    payload.sno=adminlistData.length+1;
    payload.image="image";
    // let date = new Date();
    // payload.firstRating = date.toISOString().split('T')[0];
    // payload.rating = '4';
    adminlistData.push(payload);
    console.log(adminlistData)
    return of(adminlistData);
  }

  submitEditedAdminDetail(payload:any,serialno:number)
{
  const token = localStorage.getItem('token') || '';
  let httpOption = new HttpHeaders().set('x-access-token', token)
  const endpointUrl = `${environment.JSON_SERVER}/edit`;
  adminlistData.map((res)=>{
    // if (res.sno == serialno) {
    //   res.ratingCriteria = payload.ratingCriteria,
    //   res.status = payload.status
    // }
  }) 
  return of(adminlistData)
}

deleteAdminDetails(name:string):Observable<any[]>{
  const token =localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token',token)
  const endpointUrl = `${environment.JSON_SERVER}/delete`
  let filteredreviewer = adminlistData.splice(adminlistData.findIndex((index) => index.username== name),1);
        return of(filteredreviewer)
}

}
