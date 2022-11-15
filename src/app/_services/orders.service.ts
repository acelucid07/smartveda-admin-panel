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

  getDeliveredOrderList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let DeliveredOrderList = order.filter(item => item.deliveryStatus === "Delivered")
    return of(DeliveredOrderList)
  }
  getConfirmedOrderList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let DeliveredOrderList = order.filter(item => item.orderStatus === "Confirmed")
    return of(DeliveredOrderList)
  }
  deleteConfirmedOrder(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexConfirmedOrder = order.findIndex(item => item.orderId === orderId)
    order.splice(order.findIndex((index) => index.orderId == orderId), 1);
    return of(order[indexConfirmedOrder])
  }
  deleteOrder(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexOrder = order.findIndex(item => item.orderId === orderId)
    order.splice(order.findIndex((index) => index.orderId == orderId), 1);
    return of(order[indexOrder])
  }
  deleteDeliveredOrder(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexDeliveredOrder = order.findIndex(item => item.orderId === orderId)
    order.splice(order.findIndex((index) => index.orderId == orderId), 1);
    return of(order[indexDeliveredOrder])
  }
  deleteCancelledOrder(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexDeleteOrder = order.findIndex(item => item.orderId === orderId)
    order.splice(order.findIndex((index) => index.orderId == orderId), 1);
    return of(order[indexDeleteOrder])
  }
  deteOrderTransactionById(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexOrderTrans = orderTransactin.findIndex(item => item.orderId === orderId)
    orderTransactin.splice(orderTransactin.findIndex((index) => index.orderId == orderId), 1);
    return of(orderTransactin[indexOrderTrans])
  }
}
