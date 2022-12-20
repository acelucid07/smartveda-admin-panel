import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppointmentData } from '../DummyData/appoinment'
import * as moment from 'moment';
import { APPOINTMENT } from '../_models/appointment';

@Injectable({ providedIn: 'root' })
export class AppoinmentService {
    constructor(private http: HttpClient) {
    }

    getAppointmentList() {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/appointment`;
        return of(AppointmentData)
    }

    getAppointmentById(id: string | number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/appointment`;
        let indexValue = AppointmentData.findIndex(item => item._id === id)
        return of(AppointmentData[indexValue])
    }

    addAppointment(appointmentData: any) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/appointment`;
        appointmentData.id = AppointmentData.length + 1;
        AppointmentData.push(appointmentData);
        return of(appointmentData)
    }

    deleteAppointmentById(id: string | number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/appointment`;
        let indexValue = AppointmentData.findIndex(item => item._id === id)
        AppointmentData.splice(AppointmentData.findIndex((index) => index._id === id), 1);
        return of(AppointmentData[indexValue])
    }

    editAppointment(payload, id: string | number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/appointment`;
        let indexValue = AppointmentData.findIndex(item => item._id === id);
        AppointmentData[indexValue] = payload;
        return of(payload)
    }

}