import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
export interface userData {
  name?: string;
  email?: string;
  password?: string;
  rePassword?: string;
  phone?: string;
  resetCode?: string;
  newPassword?: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private _HttpClient: HttpClient) {}
  baseURL: string = `https://ecommerce.routemisr.com`;
  userData!:any
  decodedData!:any
  signUpData(body: userData): Observable<any> {
    return this._HttpClient.post(`${this.baseURL}/api/v1/auth/signup`,body);
  }
  signInData(body:userData):Observable<any> {
    return this._HttpClient.post(`${this.baseURL}/api/v1/auth/signin`, body);
  }
  decodingUserData():void{
    if(!localStorage.getItem("userData")){
      this.userData = localStorage.getItem('userData');
      this.decodedData = jwtDecode(this.userData)
    }
  }
  forgetPass(body:userData):Observable<any>{
    return this._HttpClient.post(`${this.baseURL}/api/v1/auth/forgotPasswords`,body);
  }
  verifyCode(body:userData):Observable<any>{
    return this._HttpClient.post(`${this.baseURL}/api/v1/auth/verifyResetCode`,body);
  }
  newPass(body:userData):Observable<any>{
    return this._HttpClient.put(`${this.baseURL}/api/v1/auth/resetPassword`,body)
  }
}
