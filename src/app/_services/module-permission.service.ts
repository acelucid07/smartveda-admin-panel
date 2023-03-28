import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { permissionAssigned } from '../DummyData/permissions';

@Injectable({
  providedIn: 'root'
})
export class ModulePermissionService {

  constructor(private http:HttpClient) {}

   getModulePermission():Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    const user =localStorage.getItem('UserData')
    let httpOptions = new HttpHeaders().set('x-access-token',token);
    const endpointUrl = `${environment.JSON_SERVER}/modulepermission?user=${user}`
    return this.http.get<any[]>(endpointUrl ,{ 'headers': httpOptions });
    // return of([permissionAssigned])
  }
  
}
