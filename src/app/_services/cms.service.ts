import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { CATEGORY, SUB_CATEGORY, SPONSOR } from '../_models/cms'
import { category, sub_category } from '../DummyData/category_subCategory';
import {sponsors} from '../DummyData/sponsor'

@Injectable({
    providedIn: 'root'
})
export class CmsService {

    constructor(private http: HttpClient) { }

    getCategoryList(): Observable<CATEGORY[]> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category`;
        // return this.http.get<CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
        return of(category)
    }
    getCategoryById(id: number): Observable<CATEGORY> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
        let indexObj = category.findIndex((obj)=>obj.id==id);
        //return this.http.get<CATEGORY>(endpointUrl,{ 'headers': httpOptions });
        return of(category[indexObj])
    }
    addCategory(categoryData: any) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category`;
        // return this.http.post<any>(endpointUrl, categoryData, { 'headers': httpOptions });
        categoryData.id = category.length + 1
        category.push(categoryData);
        return of(categoryData)
    }

    editCategory(categoryData: CATEGORY, id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
        // return this.http.put<CATEGORY>(endpointUrl, categoryData, { 'headers': httpOptions });
        let categoryObj = category.findIndex((obj) => obj.id == id);
        category[categoryObj] = categoryData
        return of(categoryData)
    }

    deleteCategory(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
        //return this.http.delete<CATEGORY>(endpointUrl, { 'headers': httpOptions });
        let categoryObj = category.map(item => {
            item.id == id;
            return item
        })
        category.splice(category.findIndex((index) => index.id == id),1);
        return of(categoryObj)
    }

    getSubCategoryList() {
        let subCategoryData = from(sub_category)
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sub_category`;
        // return this.http.get<SUB_CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
        return of(sub_category)
    }
    getSubCategoryListById(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sub_category/${id}`;
        //return this.http.get<any>(endpointUrl, { 'headers': httpOptions });
        let subCategoryObj = sub_category.findIndex((obj)=>obj.id==id)
        return of(sub_category[subCategoryObj])
    }
    addSubCategory(subCategoryData: any) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sub_category`;
        //return this.http.post<any>(endpointUrl, subCategoryData, { 'headers': httpOptions });
        subCategoryData.id = sub_category.length + 1
        sub_category.push(subCategoryData)
        return of(subCategoryData)
    }
    editSubCategory(subCategoryData: any, id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sub_category/${id}`;
        //return this.http.put<any>(endpointUrl, subCategoryData, { 'headers': httpOptions });
        let subCategoryObje = sub_category.findIndex((obj) => obj.id == id);
        sub_category[subCategoryObje] = subCategoryData;
        return of(subCategoryData)
    }
    deleteSubCategory(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sub_category/${id}`;
        // return this.http.delete<any>(endpointUrl, { 'headers': httpOptions });
        let subCategoryObj = sub_category.map(item => {
            item.id == id;
            return item
        })
        category.splice(sub_category.findIndex((index) => index.id == id), 1);
        return of(subCategoryObj)
    }

    getSponsorList() {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sponsors`;
        // return this.http.get<SPONSOR[]>(endpointUrl, { 'headers': httpOptions });
        return of(sponsors)
    }
    getSponsorDetailsById(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sponsors/${id}`;
        let sponsorObj = sponsors.findIndex(obj=>obj.id===id)
        return of(sponsors[sponsorObj])
        // return this.http.get<SPONSOR>(endpointUrl,{ 'headers': httpOptions });
    }
    addSponsor(sponsorData: any) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sponsors`;
        // return this.http.post<any>(endpointUrl, sponsorData, { 'headers': httpOptions });
        sponsorData.id = sponsors.length + 1;
        sponsors.push(sponsorData)
        return of(sponsorData)
    }
    editSponsor(sponsorData: any, id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sponsors/${id}`;
        //return this.http.put<any>(endpointUrl, sponsorData, { 'headers': httpOptions });
        let sponsorObj = sponsors.findIndex((obj) => obj.id == id);
        sponsors[sponsorObj] = sponsorData;
        return of(sponsorData)
    }
    deleteSponsor(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/sponsors/${id}`;
        //return this.http.delete<any>(endpointUrl, { 'headers': httpOptions });
        let sponsorObj = sponsors.map(item => {
            item.id == id;
            return item;
        })
        sponsors.splice(sponsors.findIndex((index) => index.id == id), 1)
        return of(sponsorObj)
    }
}
