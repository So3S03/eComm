import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerData } from './customer-data';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private _HttpClient: HttpClient) {}
  baseURL: string = `https://ecommerce.routemisr.com`;
  createCashOrder(customerData:CustomerData,cartId:string): Observable<any> {
    return this._HttpClient.post(`${this.baseURL}/api/v1/orders/${cartId}`,customerData)
  }
  
}
