import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { usertypeList } from '../DummyData/usertype';

@Injectable({
  providedIn: 'root'
})
export class UsertypeService {

  constructor(private http:HttpClient) { }

  getUsertypeList():Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token',token);
    const endpointUrl = `${environment.JSON_SERVER}/reviewlist`
    // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
    return of(usertypeList)
  }

  getUsertypeDetails(serialno:number):Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token',token);
    const endpointUrl = `${environment.JSON_SERVER}/reviewDetail`
    // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
    
    console.log(usertypeList)
    let filteredValue=usertypeList.filter(val=>{
      return (val.sno == serialno)
    })
    return of(filteredValue)
    }

  submitUsertypeDetail(payload:any):Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOption = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/add`;
    payload.sno=usertypeList.length+1;
    // let date = new Date();
    // payload.firstRating = date.toISOString().split('T')[0];
    // payload.rating = '4';
    usertypeList.push(payload);
    console.log(usertypeList)
    return of(usertypeList);
  }

  submitEditedUsertypeDetail(payload:any,serialno:number)
{
  const token = localStorage.getItem('token') || '';
  let httpOption = new HttpHeaders().set('x-access-token', token)
  const endpointUrl = `${environment.JSON_SERVER}/edit`;
  usertypeList.map((res)=>{
    if (res.sno == serialno) {
      res.usertype = payload.usertype,
      res.status = payload.status
    }
  }) 
  return of(usertypeList)
}

deleteUsertypeDetails(name:string):Observable<any[]>{
  const token =localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token',token)
  const endpointUrl = `${environment.JSON_SERVER}/delete`
  let filteredreviewer = usertypeList.splice(usertypeList.findIndex((index) => index.usertype == name),1);
        return of(filteredreviewer)
}


}
