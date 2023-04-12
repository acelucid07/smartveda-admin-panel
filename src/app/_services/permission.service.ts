import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { modulePermissionList } from '../DummyData/permissionList';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http:HttpClient) {}

   getPermittedModuleList():Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token',token);
    const endpointUrl = `${environment.BASE_URL}/modulepermission`
    return this.http.get<any[]>(endpointUrl ,{ 'headers': httpOptions });
    // return of(modulePermissionList)
  }

  getPermissionDetails(user:string):Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token',token);
    const endpointUrl = `${environment.BASE_URL}/modulepermission?user=${user}`
    return this.http.get<any[]>(endpointUrl,{ 'headers': httpOptions });
    
    // console.log(ratingCriteriaList)
    // let filteredValue=adminlistData.filter(val=>{
    //   return (val.sno == serialno)
    // })
    // return of(filteredValue)
    }

  submitPermissionDetail(payload:any):Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.BASE_URL}/modulepermission`;
    // payload.sno=modulePermissionList.length+1;
    // payload.image='image'
    // let date = new Date();
    // payload.firstRating = date.toISOString().split('T')[0];
    // payload.rating = '4';

    // modulePermissionList.push(payload);
    // console.log(modulePermissionList)
    console.log()
     return this.http.post<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
    // return of(modulePermissionList);
  }

  submitEditedPermissionDetail(payload:any,user:string)
{
  const token = localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token', token)
  const endpointUrl = `${environment.BASE_URL}/modulepermission?user=${user}`;
  return this.http.put<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
}

deletePermissionDetails(name:string):Observable<any[]>{
  const token =localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token',token)
  const endpointUrl = `${environment.BASE_URL}/modulepermission?user=${name}`
  // let filteredDetail = modulePermissionList.splice(modulePermissionList.findIndex((index) => index.username== name),1);
        // return of(filteredDetail)
        return this.http.delete<any[]>(endpointUrl,{ 'headers': httpOptions });
}

}