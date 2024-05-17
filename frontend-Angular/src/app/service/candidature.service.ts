import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CandidatRequest } from '../models/candidatRequest';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  constructor(private http:HttpClient) { }

  public createcandidature(FormData:FormData)
  {
    return this.http.post<any>("http://localhost:8080/api/candidate/create",FormData)
  }
}
