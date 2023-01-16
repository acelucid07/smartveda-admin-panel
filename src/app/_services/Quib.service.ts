import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { order, cancelOrder, orderTransactin, shipmentData } from '../DummyData/order'
import { Userdata, MovieData, QuibData } from '../DummyData/userData'

@Injectable({
  providedIn: 'root'
})

export class QuibService {
  constructor(private http: HttpClient) { }
  deleteUser(Id: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexOrder = Userdata.findIndex(item => item.id === Id)
    Userdata.splice(Userdata.findIndex((index) => index.id == Id), 1);
    return of(Userdata[indexOrder])
  }
  IsEnabled(Id: number, Status) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let index = QuibData.findIndex(item => item.id === Id)
    if (Status === true) {
      QuibData[index].isEnabled = "Approved"
    } else {
      QuibData[index].isEnabled = "Decline"
    }
    return of(QuibData[index])
  }

  IsBumped(Id: number, Status) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let index = QuibData.findIndex(item => item.id === Id)
    if (Status === true) {
      QuibData[index].isBumped = "Saved"
    } else {
      QuibData[index].isBumped = "Decline"
    }
    return of(QuibData[index])
  }

  markAsActive(Id: number, Status) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let index = Userdata.findIndex(item => item.id === Id)
    if (Status === true) {
      Userdata[index].status = "Approved"
    } else {
      Userdata[index].status = "Decline"
    }
    return of(Userdata[index])
  }

  getUserList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    return of(Userdata)
  }

  getMostActiveQuibList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    return of(QuibData)
  }
  getRecentActiveQuibList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    return of(QuibData)
  }
  getAlphBeticQuibList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    return of(QuibData)
  }
  deleteQuib(QuibId) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let index = QuibData.findIndex(item => item.id === QuibId)
    QuibData.splice(QuibData.findIndex((index) => index?.id == QuibId), 1);
    return of(QuibData[index])
  }
}
