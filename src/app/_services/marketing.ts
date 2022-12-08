import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { CouponData, rewardsRedemptionData } from '../DummyData/marketing';


@Injectable({
    providedIn: 'root'
})
export class MarketingService {

    constructor(private http: HttpClient) {

    }
    getCouponList() {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/coupons`;
        //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
        return of(CouponData)
    }

    getActiveCouponList() {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/coupons`;
        //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
        let ActiveCouponList = CouponData.filter(item => item.status === true)
        return of(ActiveCouponList)
    }

    getInActiveCouponList() {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/coupons`;
        //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
        let InActiveCouponList = CouponData.filter(item => item.status === false)
        return of(InActiveCouponList)
    }
    addCouponCode(Data: any) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/coupons`;
        //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
        CouponData.push(Data)
        return of(Data)
    }
    getCouponCodeById(id) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/couponsById`;
        //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
        let indeofCoupon = CouponData.findIndex(item => item.id === id);
        return of(CouponData[indeofCoupon])
    }
    editCouponCode(CouponCode: any, payload) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/coupons`;
        //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
        let indeofCoupon = CouponData.findIndex(item => item.Code === CouponCode);
        CouponData[indeofCoupon] = payload
        return of(payload)
    }

    getRewardRedemptionList(){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/coupons`;
        //return this.http.get(endpointUrl, { 'headers': httpOptions }).pipe(map(res => res));
        return of(rewardsRedemptionData)
    }
}