import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { reviewList } from '../DummyData/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http:HttpClient) { }
 
  getReviewList():Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token',token);
    const endpointUrl = `${environment.JSON_SERVER}/reviewlist`
    // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
    return of(reviewList)
}

submitReviewDetail(payload:any):Observable<any[]>{
  const token = localStorage.getItem('token') || '';
  let httpOption = new HttpHeaders().set('x-access-token', token)
  const endpointUrl = `${environment.JSON_SERVER}/add`;
  payload.Sno=reviewList.length+1;
  reviewList.push(payload)
  return of(reviewList)
}

deleteReviewDetails(name:string):Observable<any[]>{
  const token =localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token',token)
  const endpointUrl = `${environment.JSON_SERVER}/delete`
  //return this.http.delete<any[]>(endpointUrl,{'headers':httpOption})
  // let filteredData = reviewList.filter(val=>{
  //   val.id =  name
  // })
  // reviewList.splice(reviewList.indexOf(filteredData[0]),1)
  // return of(reviewList)
  let filteredreview = reviewList.splice(reviewList.findIndex((index) => index.reviewSubject == name),1);
        return of(filteredreview)
}

submitEditDetail(payload:any,serialno:number){
  const token = localStorage.getItem('token') || '';
  let httpOption = new HttpHeaders().set('x-access-token', token)
  const endpointUrl = `${environment.JSON_SERVER}/edit`;
  reviewList.map((res)=>{
    if (res.Sno == serialno) {
      res.reviewSubject = payload.reviewSubject,
      res.rating = payload.rating,
      res.publishingsiteurl = payload.publishingsiteurl,
      res.status = payload.status
    }
  }) 
  return of(reviewList)
}



getReviewDetail(serialno:number){
  const token = localStorage.getItem('token') || '';
  let httpOption = new HttpHeaders().set('x-access-token', token)
  const endpointUrl = `${environment.JSON_SERVER}/edit`;
  let filtered =reviewList.filter((res)=>{
    return res.Sno == serialno
  }) 

  console.log(serialno)
  return of(filtered)
}
}
