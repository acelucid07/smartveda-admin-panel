import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Order, cancelOrder, orderTransactin } from '../DummyData/order'
import {order} from '../_models/order'

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
    return of(Order)
  }
  getOrderDetailsBy(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders/${orderId}`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let index = Order.findIndex((item) => item.orderId === orderId)
    return of(Order[index])
  }
  addOrders(orderData: any) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    orderData.orderId= Order.length + 1
    Order.push(orderData);
        return of(orderData)
  }

  updateOrderStatus(orderId: number, data: any) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orderStatus/${orderId}`;
    //return this.http.put(endpointUrl, data, { 'headers': httpOptions }).pipe(map(res => res));
    let index = Order.findIndex((item) => item.orderId === orderId)
    Order[index] = data
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
    let DeliveredOrderList = Order.filter(item => item.deliveryStatus === "Delivered")
    return of(DeliveredOrderList)
  }
  getConfirmedOrderList() {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let DeliveredOrderList = Order.filter(item => item.orderStatus === "Confirmed")
    return of(DeliveredOrderList)
  }
  deleteConfirmedOrder(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexConfirmedOrder = Order.findIndex(item => item.orderId === orderId)
    Order.splice(Order.findIndex((index) => index.orderId == orderId), 1);
    return of(Order[indexConfirmedOrder])
  }
  deleteOrder(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexOrder = Order.findIndex(item => item.orderId === orderId)
    Order.splice(Order.findIndex((index) => index.orderId == orderId), 1);
    return of(Order[indexOrder])
  }
  deleteDeliveredOrder(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexDeliveredOrder = Order.findIndex(item => item.orderId === orderId)
    Order.splice(Order.findIndex((index) => index.orderId == orderId), 1);
    return of(Order[indexDeliveredOrder])
  }
  deleteCancelledOrder(orderId: number) {
    const token = localStorage.getItem('token') || '';
    let httpOptions = new HttpHeaders().set('x-access-token', token)
    const endpointUrl = `${environment.JSON_SERVER}/orders`;
    //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
    let indexDeleteOrder = cancelOrder.findIndex(item => item.orderId === orderId)
    cancelOrder.splice(cancelOrder.findIndex((index) => index.orderId == orderId), 1);
    return of(cancelOrder[indexDeleteOrder])
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
