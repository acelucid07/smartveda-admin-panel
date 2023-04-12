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
    const endpointUrl = `${environment.BASE_URL}/registeredusers`
    return this.http.get<any[]>(endpointUrl,{ 'headers': httpOptions });
    // return of(adminlistData)
  }

  getAdminDetails(user:string):Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token',token);
    const endpointUrl = `${environment.BASE_URL}/user?username=${user}`
    // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
    
    // console.log(ratingCriteriaList)
    // let filteredValue=adminlistData.filter(val=>{
    //   return (val.sno == serialno)
    // })
    // return of(filteredValue)
    return this.http.get<any[]>(endpointUrl,{ 'headers': httpOptions });
    }

  submitAdminDetail(payload:any):Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const formData = new FormData();

      formData.append('username', payload.username);
      formData.append('password', payload.password);
      formData.append('phone', payload.phone);
      formData.append('email', payload.email);
      formData.append('role', payload.role);
      if(!!payload.image)
        formData.append('image', payload.image);
  
    // Object.assign(httpOptions, new HttpHeaders())
    console.log(httpOptions.has('Content-Type'))
    // Object.assign()
    const endpointUrl = `${environment.BASE_URL}/signup`;
    // payload.sno=adminlistData.length+1;
    // payload.image="image";
    // let date = new Date();
    // payload.firstRating = date.toISOString().split('T')[0];
    // payload.rating = '4';
    // adminlistData.push(payload);
    // console.log(adminlistData)
    console.log(formData);
    return this.http.post<any[]>(endpointUrl,formData ,{ 'headers': httpOptions });
    // return of(adminlistData);
  }

  submitEditedSuperAdminDetail(payload:any):Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token);
    const formData = new FormData();

    formData.append('username', payload.username);
    formData.append('phone', payload.phone);
    formData.append('email', payload.email);
    formData.append('role', payload.role);
    if (!!payload.password)
      formData.append('password', payload.password);
    if (!!payload.image)
      formData.append('image', payload.image);
    if (payload.prevImageName != '')
      formData.append('prevImgName', payload.prevImageName);

    // Object.assign(httpOptions, new HttpHeaders())
    console.log(httpOptions.has('Content-Type'))
    // Object.assign()
    const endpointUrl = `${environment.BASE_URL}/signup`;
    // payload.sno=adminlistData.length+1;
    // payload.image="image";
    // let date = new Date();
    // payload.firstRating = date.toISOString().split('T')[0];
    // payload.rating = '4';
    // adminlistData.push(payload);
    // console.log(adminlistData)
    // console.log(formData.get('password'));
    return this.http.put<any[]>(endpointUrl,formData ,{ 'headers': httpOptions });
    // return of(adminlistData);
  }



  submitEditedAdminDetail(payload:any):Observable<any[]>
{
  const token = localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token', token)
  const endpointUrl = `${environment.BASE_URL}/signup`;
  const formData = new FormData();

  
      formData.append('username', payload.username);
      formData.append('phone', payload.phone);
      formData.append('email', payload.email);
      formData.append('role', payload.role);
      console.log(payload.image)
      formData.append('image', payload.image);
      if(payload.prevImageName!='')
      formData.append('prevImgName', payload.prevImageName);
  // adminlistData.map((res)=>{
    // if (res.sno == serialno) {
    //   res.ratingCriteria = payload.ratingCriteria,
    //   res.status = payload.status
    // }
    console.log(formData.get('email'))
  // }) 
  return this.http.put<any[]>(endpointUrl,formData ,{ 'headers': httpOptions });
  // return of(adminlistData)
}

deleteAdminDetails(name:string):Observable<any[]>{
  const token =localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token',token)
  const endpointUrl = `${environment.BASE_URL}/signup?user=${name}`
  // let filteredreviewer = adminlistData.splice(adminlistData.findIndex((index) => index.username== name),1);
  //       return of(filteredreviewer)
  return this.http.delete<any[]>(endpointUrl,{ 'headers': httpOptions });
}

}
