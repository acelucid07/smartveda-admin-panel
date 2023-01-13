import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, from, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MovieData } from '../DummyData/userData';
@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    constructor(private http: HttpClient) { }
    getMovieList(){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/product`;
        // return this.http.post<any>(endpointUrl, categoryData, { 'headers': httpOptions });
       return of(MovieData)  
    }
    getActiveMoviesList(){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/product`;
        // return this.http.post<any>(endpointUrl, categoryData, { 'headers': httpOptions });
       return of(MovieData)  
    }
    markAsActive(id, Status){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/product`;
        // return this.http.post<any>(endpointUrl, categoryData, { 'headers': httpOptions });
        let index =  MovieData.findIndex(item=>item.id===id);
        MovieData[index].isActive = Status
       return of(MovieData)  
    }
}
