import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { environment } from '../../environments/environment';
import { CATEGORY, SUB_CATEGORY, SPONSOR } from '../_models/cms'

@Injectable({
    providedIn: 'root'
})
export class CmsService {

    constructor(private http: HttpClient) { }

    getCategoryList(): Observable<CATEGORY[]> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category`;
        return this.http.get<CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
    }
    getCategoryById(id: number): Observable<CATEGORY> {
        const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
        return this.http.get<CATEGORY>(endpointUrl);
    }
    addCategory(categoryData: any): Observable<CATEGORY> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category`;
        return this.http.post<any>(endpointUrl, categoryData, { 'headers': httpOptions });
    }

    editCategory(categoryData: CATEGORY, id:string): Observable<CATEGORY> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
        return this.http.put<CATEGORY>(endpointUrl, categoryData, { 'headers': httpOptions });
    }

    deleteCategory(id:number): Observable<CATEGORY> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
        return this.http.delete<CATEGORY>(endpointUrl, { 'headers': httpOptions });
    }

    getSubCategoryList(): Observable<SUB_CATEGORY[]> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sub_category`;
        return this.http.get<SUB_CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
    }
    getSubCategoryListById(id: number): Observable<any> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sub_category/${id}`;
        return this.http.get<any>(endpointUrl, { 'headers': httpOptions });
    }
    addSubCategory(subCategoryData: any): Observable<SUB_CATEGORY> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sub_category`;
        return this.http.post<any>(endpointUrl, subCategoryData, { 'headers': httpOptions });
    }
    editSubCategory(subCategoryData: any, id:number): Observable<SUB_CATEGORY> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sub_category/${id}`;
        return this.http.put<any>(endpointUrl, subCategoryData, { 'headers': httpOptions });
    }
    deleteSubCategory(id:number): Observable<SUB_CATEGORY> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sub_category/${id}`;
        return this.http.delete<any>(endpointUrl, { 'headers': httpOptions });
    }

    getSponsorList(): Observable<SPONSOR[]> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sponsors`;
        return this.http.get<SPONSOR[]>(endpointUrl, { 'headers': httpOptions });
    }
    getSponsorDetailsById(id: number): Observable<SPONSOR> {
        const endpointUrl = `${environment.JSON_SERVER}/sponsors/${id}`;
        return this.http.get<SPONSOR>(endpointUrl);
    }
    addSponsor(sponsorData: any): Observable<SPONSOR> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sponsors`;
        return this.http.post<any>(endpointUrl, sponsorData, { 'headers': httpOptions });
    }
    editSponsor(sponsorData: any, id:number): Observable<SPONSOR> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sponsors/${id}`;
        return this.http.put<any>(endpointUrl, sponsorData, { 'headers': httpOptions });
    }
    deleteSponsor(id:number): Observable<SPONSOR> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sponsors/${id}`;
        return this.http.delete<any>(endpointUrl,  { 'headers': httpOptions });
    }
}
