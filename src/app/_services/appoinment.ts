import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppointmentData } from '../DummyData/appoinment'
import * as moment from 'moment';
import { APPOINMENT } from '../_models/appoinment';

@Injectable({ providedIn: 'root' })
export class AppoinmentService {
    constructor(private http: HttpClient) {
    }

    getAppoinmentList() {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category`;
        // return this.http.get<CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
        return of(AppointmentData)
    }

    getAppoinmentById(id: string | number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category`;
        // return this.http.get<CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
        let indexValue = AppointmentData.findIndex(item => item._id === id)
        return of(AppointmentData[indexValue])
    }

    deleteAppoinmentById(id: string | number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category`;
        // return this.http.get<CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
        let indexValue = AppointmentData.findIndex(item => item._id === id)
        AppointmentData.splice(AppointmentData.findIndex((index) => index._id === id), 1);
        return of(AppointmentData[indexValue])
    }
    updateAppoinment(payload, id: string | number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category`;
        // return this.http.get<CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
        let indexValue = AppointmentData.findIndex(item => item._id === id);
        AppointmentData[indexValue] = payload;
        return of(payload)
    }

}