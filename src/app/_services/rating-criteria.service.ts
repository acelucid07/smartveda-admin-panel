import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { ratingCriteriaList } from '../DummyData/ratingCriteria';

@Injectable({
  providedIn: 'root'
})
export class RatingCriteriaService {

  constructor(private http:HttpClient) { }

  getCriteriaList():Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token',token);
    const endpointUrl = `${environment.JSON_SERVER}/reviewlist`
    // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
    return of(ratingCriteriaList)
  }

  getCriteriaDetails(serialno:number):Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token',token);
    const endpointUrl = `${environment.JSON_SERVER}/reviewDetail`
    // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
    
    console.log(ratingCriteriaList)
    let filteredValue=ratingCriteriaList.filter(val=>{
      return (val.sno == serialno)
    })
    return of(filteredValue)
    }

  submitCriteriaDetail(payload:any):Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOption = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/add`;
    payload.sno=ratingCriteriaList.length+1;
    // let date = new Date();
    // payload.firstRating = date.toISOString().split('T')[0];
    // payload.rating = '4';
    ratingCriteriaList.push(payload);
    console.log(ratingCriteriaList)
    return of(ratingCriteriaList);
  }

  submitEditedCriteriaDetail(payload:any,serialno:number)
{
  const token = localStorage.getItem('token') || '';
  let httpOption = new HttpHeaders().set('x-access-token', token)
  const endpointUrl = `${environment.JSON_SERVER}/edit`;
  ratingCriteriaList.map((res)=>{
    if (res.sno == serialno) {
      res.ratingCriteria = payload.ratingCriteria,
      res.status = payload.status
    }
  }) 
  return of(ratingCriteriaList)
}

deleteCriteriaDetails(name:string):Observable<any[]>{
  const token =localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token',token)
  const endpointUrl = `${environment.JSON_SERVER}/delete`
  let filteredreviewer = ratingCriteriaList.splice(ratingCriteriaList.findIndex((index) => index.ratingCriteria == name),1);
        return of(filteredreviewer)
}


}
