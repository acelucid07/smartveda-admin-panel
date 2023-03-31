import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { Bundle } from '../_models/bundle'
import { category, sub_category } from '../DummyData/category_subCategory';
import {sponsors} from '../DummyData/sponsor'
import { request } from 'http';
import { RequestOptions } from 'https';

@Injectable({
    providedIn: 'root'
})
export class BundleService {

    constructor(private http: HttpClient) { }

    getBundleList(): Observable<Bundle[]> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.BASE_URL}/showCategorizedBasket`;
        return this.http.get<Bundle[]>(endpointUrl);
        // return of(category)
    }

    addBundle(data:any){
        const token = localStorage.getItem('token') || '';
        console.log(token)
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.BASE_URL}/createCategorizedBasket`;
        return this.http.post<any>(endpointUrl, data, { 'headers': httpOptions });
    }
    // getCategoryById(id: number): Observable<CATEGORY> {
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
    //     let indexObj = category.findIndex((obj)=>obj.id==id);
    //     //return this.http.get<CATEGORY>(endpointUrl,{ 'headers': httpOptions });
    //     return of(category[indexObj])
    // }
    
    addInfluencers(data: any) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.BASE_URL}/addInfluencersToBasket`;
        return this.http.post<any>(endpointUrl, data, { 'headers': httpOptions });
    }

    addInfluencersByCsv(username: any) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/searchbyusername`;
        return this.http.post<any>(endpointUrl, username, { 'headers': httpOptions });
        // categoryData.id = category.length + 1
        // category.push(categoryData);
        // return of(categoryData)

//         const options:RequestOptions
//         = {
//             hostname: `${environment.BASE_URL}`,
//             path: '/searchbyusername',
//             method: 'POST',
//             headers: {
//                 'x-access-token': token
//             }
//           }

//         var productsToReturn = []
// let requests = username.map(data => {
//    //create a promise for each API call
//    return new Promise((resolve, reject) => {
//     // return this.http.post<any>(endpointUrl, username, { 'headers': httpOptions });  
//     request(options,
//       ( body) => {                          //function passed to the promise
//       resolve(body)
//       })
//    })
// })
// Promise.all(requests).then((resolvedbody) => { 
//    resolvedbody.forEach(res => {
//    if (res)
//       productsToReturn.push(JSON.parse(res))     
//    })
  
//    let httpOptions = new HttpHeaders().set('x-access-token', token)
//    const endpointUrl = `${environment.BASE_URL}/getInfluencersDetails`;
//    return this.http.post<any>(endpointUrl, username, { 'headers': httpOptions });

// }).catch(err => console.log(err))
    }

    addInfluencersDetails() {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/getInfluencersDetails`;
        return this.http.post<any>(endpointUrl, { 'headers': httpOptions });
    }

    uploadImage(data:any, bundleName:String){
        let form = new FormData()
        form.append('image',data)
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.BASE_URL}/addImageToBasket`+'?categoryName='+bundleName;
        return this.http.post<any>(endpointUrl, form,{ 'headers': httpOptions });
    }

    // editBundle(categoryData: any, id: number) {
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
    //     return this.http.put<any>(endpointUrl, categoryData, { 'headers': httpOptions });
    //     // let categoryObj = category.findIndex((obj) => obj.id == id);
    //     // category[categoryObj] = categoryData
    //     // return of(categoryData)
    // }

    // deleteCategory(id: number) {
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
    //     //return this.http.delete<CATEGORY>(endpointUrl, { 'headers': httpOptions });
    //     let categoryObj = category.map(item => {
    //         item.id == id;
    //         return item
    //     })
    //     category.splice(category.findIndex((index) => index.id == id),1);
    //     return of(categoryObj)
    // }

    // getSubCategoryList() {
    //     let subCategoryData = from(sub_category)
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/sub_category`;
    //     // return this.http.get<SUB_CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
    //     return of(sub_category)
    // }
    // getSubCategoryListById(id: number) {
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/sub_category/${id}`;
    //     //return this.http.get<any>(endpointUrl, { 'headers': httpOptions });
    //     let subCategoryObj = sub_category.findIndex((obj)=>obj.id==id)
    //     return of(sub_category[subCategoryObj])
    // }
    // addSubCategory(subCategoryData: any) {
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/sub_category`;
    //     //return this.http.post<any>(endpointUrl, subCategoryData, { 'headers': httpOptions });
    //     subCategoryData.id = sub_category.length + 1
    //     sub_category.push(subCategoryData)
    //     return of(subCategoryData)
    // }
    // editSubCategory(subCategoryData: any, id: number) {
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/sub_category/${id}`;
    //     //return this.http.put<any>(endpointUrl, subCategoryData, { 'headers': httpOptions });
    //     let subCategoryObje = sub_category.findIndex((obj) => obj.id == id);
    //     sub_category[subCategoryObje] = subCategoryData;
    //     return of(subCategoryData)
    // }
    // deleteSubCategory(id: number) {
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/sub_category/${id}`;
    //     // return this.http.delete<any>(endpointUrl, { 'headers': httpOptions });
    //     let subCategoryObj = sub_category.map(item => {
    //         item.id == id;
    //         return item
    //     })
    //     category.splice(sub_category.findIndex((index) => index.id == id), 1);
    //     return of(subCategoryObj)
    // }

    // getSponsorList() {
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/sponsors`;
    //     // return this.http.get<SPONSOR[]>(endpointUrl, { 'headers': httpOptions });
    //     return of(sponsors)
    // }
    // getSponsorDetailsById(id: number) {
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/sponsors/${id}`;
    //     let sponsorObj = sponsors.findIndex(obj=>obj.id===id)
    //     return of(sponsors[sponsorObj])
    //     // return this.http.get<SPONSOR>(endpointUrl,{ 'headers': httpOptions });
    // }
    // addSponsor(sponsorData: any) {
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/sponsors`;
    //     // return this.http.post<any>(endpointUrl, sponsorData, { 'headers': httpOptions });
    //     sponsorData.id = sponsors.length + 1;
    //     sponsors.push(sponsorData)
    //     return of(sponsorData)
    // }
    // editSponsor(sponsorData: any, id: number) {
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/sponsors/${id}`;
    //     //return this.http.put<any>(endpointUrl, sponsorData, { 'headers': httpOptions });
    //     let sponsorObj = sponsors.findIndex((obj) => obj.id == id);
    //     sponsors[sponsorObj] = sponsorData;
    //     return of(sponsorData)
    // }
    // deleteSponsor(id: number) {
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/sponsors/${id}`;
    //     //return this.http.delete<any>(endpointUrl, { 'headers': httpOptions });
    //     let sponsorObj = sponsors.map(item => {
    //         item.id == id;
    //         return item;
    //     })
    //     sponsors.splice(sponsors.findIndex((index) => index.id == id), 1)
    //     return of(sponsorObj)
    // }
}
