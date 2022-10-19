import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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
        const endpointUrl = `${environment.JSON_SERVER}/orders`;
        return this.http.get<CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
    }
    getCategoryById(id: string): Observable<CATEGORY> {
        const endpointUrl = `${environment.JSON_SERVER}/${id}`;
        return this.http.get<CATEGORY>(endpointUrl);
    }
    addCategory(categoryData: CATEGORY): Observable<CATEGORY> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/orders`;
        return this.http.post<CATEGORY>(endpointUrl, categoryData, { 'headers': httpOptions });
    }

    editCategory(categoryData: CATEGORY): Observable<CATEGORY> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/orders`;
        return this.http.put<CATEGORY>(endpointUrl, categoryData, { 'headers': httpOptions });
    }

    getSubCategory(): Observable<SUB_CATEGORY[]> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/orders`;
        return this.http.get<SUB_CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
    }

    addSubCategory(subCategoryData: SUB_CATEGORY): Observable<SUB_CATEGORY> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/orders`;
        return this.http.post<SUB_CATEGORY>(endpointUrl, subCategoryData, { 'headers': httpOptions });
    }
    editSubCategory(subCategoryData: SUB_CATEGORY): Observable<SUB_CATEGORY> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/orders`;
        return this.http.put<SUB_CATEGORY>(endpointUrl, subCategoryData, { 'headers': httpOptions });
    }

    getSponsorList(): Observable<SPONSOR[]> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/orders`;
        return this.http.get<SPONSOR[]>(endpointUrl, { 'headers': httpOptions });
    }
    getSponsorDetailsById(id: string): Observable<SPONSOR> {
        const endpointUrl = `${environment.JSON_SERVER}/${id}`;
        return this.http.get<SPONSOR>(endpointUrl);
    }
    addSponsor(sponsorData: SPONSOR): Observable<SPONSOR> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/orders`;
        return this.http.post<SPONSOR>(endpointUrl, sponsorData, { 'headers': httpOptions });
    }
    editSponsor(sponsorData: SPONSOR): Observable<SPONSOR> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/orders`;
        return this.http.put<SPONSOR>(endpointUrl, sponsorData, { 'headers': httpOptions });
    }
}
