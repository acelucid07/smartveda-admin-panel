import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, from, Observable, observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MovieData } from '../DummyData/userData';
import {Movies } from "../_models/movies"
@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    Quib_Admin =  environment.QUIB_ADMIN
    constructor(private http: HttpClient) { }
    getMovieList():Observable<Movies[]> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.QUIB_ADMIN}/Movies`;
        return this.http.get<Movies[]>(endpointUrl)
    }
    getActiveMoviesList() {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.QUIB_ADMIN}/Movies`;
       return this.http.get(endpointUrl)
    }
    markAsActive(id, Status) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/product`;
        // return this.http.post<any>(endpointUrl, categoryData, { 'headers': httpOptions });
        let index = MovieData.findIndex(item => item.id === id);
        MovieData[index].isActive = Status
        return of(MovieData)
    }
    deleteMovies(moviesId) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/`;
        //return this.http.delete<CATEGORY>(endpointUrl, { 'headers': httpOptions });
        let index = MovieData.findIndex((item) => item.id == moviesId)
        MovieData.splice(MovieData.findIndex((index) => index.id == moviesId), 1);
        return of(MovieData[index])
    }
    addMovies(payload) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/`;
        //return this.http.delete<CATEGORY>(endpointUrl, { 'headers': httpOptions });
        MovieData.push(payload);
        return of(payload)
    }
    editMovies(payload, moviesId) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/`;
        //return this.http.delete<CATEGORY>(endpointUrl, { 'headers': httpOptions });
        let index = MovieData.findIndex(item => item.id === moviesId)
        MovieData[index] = payload;
        return of(payload)
    }
}
