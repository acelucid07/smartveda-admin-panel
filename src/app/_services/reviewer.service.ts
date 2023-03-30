import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { reviewerDetail } from '../DummyData/reviewer';

@Injectable({
  providedIn: 'root'
})
export class ReviewerService {

  constructor(private http:HttpClient) { }

  getReviewerList():Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token',token);
    const endpointUrl = `${environment.JSON_SERVER}/reviewlist`
    // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
    return of(reviewerDetail)
  }

  getReviewerDetails(serialno:number):Observable<any[]>{
  const token = localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token',token);
  const endpointUrl = `${environment.JSON_SERVER}/reviewDetail`
  // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
  
  console.log(reviewerDetail)
  let filteredValue=reviewerDetail.filter(val=>{
    return (val.sno == serialno)
  })
  return of(filteredValue)
  }

  submitReviewerDetail(payload:any):Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOption = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/add`;
    payload.sno=reviewerDetail.length+1;
    let date = new Date();
    payload.firstRating = date.toISOString().split('T')[0];
    payload.rating = '4';
    reviewerDetail.push(payload);
    return of(reviewerDetail);
  }

submitEditedDetails(payload:any,serialno:number)
{
  const token = localStorage.getItem('token') || '';
  let httpOption = new HttpHeaders().set('x-access-token', token)
  const endpointUrl = `${environment.JSON_SERVER}/edit`;
  reviewerDetail.map((res)=>{
    if (res.sno == serialno) {
      res.name = payload.name,
      res.email = payload.email,
      res.status = payload.status
    }
  }) 
  return of(reviewerDetail)
}

deleteReviewerDetails(name:string):Observable<any[]>{
  const token =localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token',token)
  const endpointUrl = `${environment.JSON_SERVER}/delete`
  let filteredreviewer = reviewerDetail.splice(reviewerDetail.findIndex((index) => index.name == name),1);
        return of(filteredreviewer)
}


}
