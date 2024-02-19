import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _HttpClient: HttpClient) {}
  baseURL: string = `https://ecommerce.routemisr.com`;
  getAllProducts(): Observable<any> {
    return this._HttpClient.get(`${this.baseURL}/api/v1/products`);
  }
  productDetails(productID:string):Observable<any>{
    return this._HttpClient.get(`${this.baseURL}/api/v1/products/${productID}`);
  }
}
