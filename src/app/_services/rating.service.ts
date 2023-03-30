import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { ratingDetails } from '../DummyData/rating';
import { reviewer} from '../DummyData/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http:HttpClient) { }

getRatingList():Observable<any[]>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token',token);
    const endpointUrl = `${environment.JSON_SERVER}/leadlist`
    // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
    return of(ratingDetails)
}

submitRatingData(payloadData:any):Observable<any[]>{
  const token = localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token',token);
  const endpointUrl = `${environment.JSON_SERVER}/leadlist`
   // return this.http.post<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
  let date = new Date()
  payloadData.date = date.toISOString().split('T')[0];
  ratingDetails.push(payloadData);
  return of(ratingDetails)
}

submitRatingEditData(payload:any,name:string):Observable<any[]>{
  const token = localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token',token);
  const endpointUrl = `${environment.JSON_SERVER}/leadlist`
  // return this.http.post<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
  // leads.push(payload);
// ratingDetails.splice(ratingDetails.findIndex((index) => index.reviewer == name),1)
// ratingDetails.push(payload)
ratingDetails.map(val=>{
  if(val.reviewer==name){
  val.reviewer=payload.reviewer,
 val.review=payload.review,
  val.rating=payload.rating,
  val.status=payload.status,
  val.ratingType=payload.ratingType,
  val.positives=payload.positives,
  val.negatives=payload.negatives,
  val.userType=payload.userType
  }
})

  return of(ratingDetails)
}
submitReviewerData(Data:any):Observable<any[]>{
  const token = localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token',token);
  const endpointUrl = `${environment.JSON_SERVER}/leadlist`
   // return this.http.post<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
   console.log(Data)
  reviewer.unshift(Data.name);
  return of(reviewer)
}

getReviewerList():Observable<any[]>{
  const token = localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token',token);
  const endpointUrl = `${environment.JSON_SERVER}/leadlist`
   // return this.http.post<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
  return of(reviewer)
}

getRatingDetails(name:string):Observable<any[]>{
  const token = localStorage.getItem('token') || '';
  let httpOptions = new HttpHeaders().set('x-access-token',token);
  const endpointUrl = `${environment.JSON_SERVER}/leadlist`
  let filteredData = ratingDetails.filter((data)=>{

          return data.reviewer==name
        
  })
  return of(filteredData)
}

deleteRatingDetails(name:string)
    {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token',token);
        const endpointUrl = `${environment.JSON_SERVER}/leadlist`
        // return this.http.get<any[]>(endpointUrl,payload ,{ 'headers': httpOptions });
        // leads.push(payload);
       let filteredrate = ratingDetails.splice(ratingDetails.findIndex((index) => index.reviewer == name),1);
        return of(filteredrate)
    }

}
