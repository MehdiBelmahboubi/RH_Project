import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { AuthenticateRequest } from '../User-Interface/login/models/AuthenticateRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public login(email : string,password : string){
    const request: AuthenticateRequest  = { email, password };
    return this.http.post<any>("http://localhost:8080/api/authenticate",request)
  }
}
