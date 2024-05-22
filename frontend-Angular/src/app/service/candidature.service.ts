import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CandidatRequest } from '../models/candidatRequest';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {


  constructor(private http:HttpClient) { }

  public createcandidature(FormData:FormData)
  {
    return this.http.post<any>(`${environment.backendHost}/candidate/create`,FormData)
  }

  public getCandidat(departement:string)
  {
    return this.http.get<any>(`${environment.backendHost}/candidate/get/${departement}/departement`)
  }

  public getAllCandidat()
  {
    return this.http.get<any>(`${environment.backendHost}/candidate/get/all`)
  }

  public accepteCandidat(id:number)
  {
    return this.http.put<any>(`${environment.backendHost}/candidate/accepte/${id}`,id)
  }

  public deleteCandidat(id: number) {
    return this.http.delete<any>(`${environment.backendHost}/candidate/delete/${id}`)
  }


}
