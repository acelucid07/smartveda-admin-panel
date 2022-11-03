import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { products } from '../DummyData/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) { }

    getProductList() {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/product`;
        // return this.http.get<CATEGORY[]>(endpointUrl, { 'headers': httpOptions });
        return of(products)
    }
    getProductById(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/product/${id}`;
        let indexObj = products.findIndex((obj) => obj.id == id);
        let productObj =  products[indexObj]
        //return this.http.get<CATEGORY>(endpointUrl,{ 'headers': httpOptions });
        return of(productObj)
    }
    addProduct(productData: any) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/product`;
        // return this.http.post<any>(endpointUrl, categoryData, { 'headers': httpOptions });
        productData.id = products.length + 1
        products.push(productData);
        return of(productData)
    }

    editProduct(productData: any, id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/product/${id}`;
        // return this.http.put<CATEGORY>(endpointUrl, categoryData, { 'headers': httpOptions });
        let productObj = products.findIndex((obj) => obj.id == id);
        products[productObj] = productData
        return of(productObj)
    }

    deleteProduct(id: number) {
        const token = localStorage.getItem('token') || '';
        let httpOptions = new HttpHeaders().set('x-access-token', token)
        const endpointUrl = `${environment.JSON_SERVER}/product/${id}`;
        //return this.http.delete<CATEGORY>(endpointUrl, { 'headers': httpOptions });
        let productObj = products.map(item => {
            item.id == id;
            return item
        })
        products.splice(products.findIndex((index) => index.id == id), 1);
        return of(productObj)
    }
}
