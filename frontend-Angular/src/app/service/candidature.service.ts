import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CandidatRequest } from '../models/candidatRequest';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  constructor(private http:HttpClient) { }

  public createcandidature(FormData:FormData)
  {
    return this.http.post<any>(`${environment.backendHost}/candidate/create`,FormData)
  }
}
