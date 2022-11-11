import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { order, cancelOrder, orderTransactin } from '../DummyData/order'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private http: HttpClient) { }

  getOrderList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    return of(order)
  }
  getOrderDetailsBy(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders/${orderId}`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let index = order.findIndex((item) => item.orderId === orderId)
    return of(order[index])
  }

  updateOrderStatus(orderId: number, data: any) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orderStatus/${orderId}`;
    //return this.http.put(endpointUrl, data, { 'headers': httpOptions }).pipe(map(res => res));
    let index = order.findIndex((item) => item.orderId === orderId)
    order[index] = data
    return of(data)
  }
  getCancelOrderList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    return of(cancelOrder)
  }
  getOrderTransaction() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    return of(orderTransactin)
  }
}
