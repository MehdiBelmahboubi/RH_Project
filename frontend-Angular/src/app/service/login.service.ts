import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { AuthenticateRequest } from '../models/AuthenticateRequest';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  public login(email : string,password : string){
    const request: AuthenticateRequest  = { email, password };
    return this.http.post<any>(`${environment.backendHost}/authenticate`,request)
  }
}
