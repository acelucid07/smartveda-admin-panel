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
export class InfluencerService {

    constructor(private http: HttpClient) { }

    getInfluencerList(): Observable<Bundle[]> {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.BASE_URL}/getFilteredResults?inputField`;
        return this.http.get<Bundle[]>(endpointUrl,{ 'headers': httpOptions });
    }

    getCostDetails(){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.BASE_URL}/getFilteredResults?inputField=spo`;
        return this.http.get<any>(endpointUrl,{ 'headers': httpOptions });
    }
    editReelCost(data:any){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.BASE_URL}/setCalculateCostForReel`;
        return this.http.post<any>(endpointUrl, data, { 'headers': httpOptions });   
    }

    editPostCost(data:any){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.BASE_URL}/setCalculateCostForPosts`;
        return this.http.post<any>(endpointUrl, data, { 'headers': httpOptions });   
    }

    editStoryCost(data:any){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.BASE_URL}/setCalculateCostForStories`;
        return this.http.post<any>(endpointUrl, data, { 'headers': httpOptions });   
    }
    
    editIgtvCost(data:any){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.BASE_URL}/setCalculateCostForIgtv`;
        return this.http.post<any>(endpointUrl, data, { 'headers': httpOptions });   
    }

    editSwipeUpCost(data:any){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.BASE_URL}/setCalculateCostForSwipeupStories`;
        return this.http.post<any>(endpointUrl, data, { 'headers': httpOptions });   
    }

    editVideoCost(data:any){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.BASE_URL}/setCalculateCostForVideos`;
        return this.http.post<any>(endpointUrl, data, { 'headers': httpOptions });   
    }

    getInfluencersResults(query:String){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.BASE_URL}/filterUsers?username=${query}`;
        return this.http.get<any>(endpointUrl, { 'headers': httpOptions });   
    }

    editInfluencerCost(data:any){
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.BASE_URL}/setInfluencerCost`;
        return this.http.put<any>(endpointUrl,data ,{ 'headers': httpOptions }); 
    }
    // getCategoryById(id: number): Observable<CATEGORY> {
    //     const token = localStorage.getItem('token') || '';
    //     let httpOptions = new HttpHeaders().set('x-access-token', token)
    //     const endpointUrl = `${environment.JSON_SERVER}/category/${id}`;
    //     let indexObj = category.findIndex((obj)=>obj.id==id);
    //     //return this.http.get<CATEGORY>(endpointUrl,{ 'headers': httpOptions });
    //     return of(category[indexObj])
    // }
    addInfluencers(username: any) {
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
}
