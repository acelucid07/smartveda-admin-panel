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
    const endpointUrl = `${environment.JSON_SERVER}/reviewlist`
    // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
    return of(modulePermissionList)
  }

//   getAdminDetails(serialno:number):Observable<any[]>{
//     const token = localStorage.getItem('token') || '';
//     let httpOptions = new HttpHeaders().set('x-access-token',token);
//     const endpointUrl = `${environment.JSON_SERVER}/reviewDetail`
//     // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
    
//     // console.log(ratingCriteriaList)
//     let filteredValue=adminlistData.filter(val=>{
//       return (val.sno == serialno)
//     })
//     return of(filteredValue)
//     }

  submitPermissionDetail(payload:any):Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOption = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/add`;
    payload.sno=modulePermissionList.length+1;
    // let date = new Date();
    // payload.firstRating = date.toISOString().split('T')[0];
    // payload.rating = '4';

    modulePermissionList.push(payload);
    console.log(modulePermissionList)
    return of(modulePermissionList);
  }

//   submitEditedAdminDetail(payload:any,serialno:number)
// {
//   const token = localStorage.getItem('token') || '';
//   let httpOption = new HttpHeaders().set('x-access-token', token)
//   const endpointUrl = `${environment.JSON_SERVER}/edit`;
//   adminlistData.map((res)=>{
//     // if (res.sno == serialno) {
//     //   res.ratingCriteria = payload.ratingCriteria,
//     //   res.status = payload.status
//     // }
//   }) 
//   return of(adminlistData)
// }

// deleteAdminDetails(name:string):Observable<any[]>{
//   const token =localStorage.getItem('token') || '';
//   let httpOptions = new HttpHeaders().set('x-access-token',token)
//   const endpointUrl = `${environment.JSON_SERVER}/delete`
//   let filteredreviewer = modulePermissionList.splice(modulePermissionList.findIndex((index) => index.username== name),1);
//         return of(filteredreviewer)
// }

}