import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { order } from '../_models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  constructor(private http: HttpClient) { }

  getOrders(): Observable<any>{
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = 'http://localhost:3000/orders';
    return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
}
}
