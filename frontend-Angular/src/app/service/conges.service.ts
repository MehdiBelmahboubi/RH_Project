import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conges } from '../models/conges';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { CongeRequest } from '../models/conge-request';

@Injectable({
  providedIn: 'root'
})
export class CongesService {

  constructor(private http: HttpClient) { }

  public getCongesByEmployes(cin: string): Observable<Array<Conges>> {
    return this.http.get<Array<Conges>>(`${environment.backendHost}/conge/get/${cin}/employee`);
  }

  public createConge(congeRequest: CongeRequest): Observable<any> {
    return this.http.post<any>(`${environment.backendHost}/conge/create`,congeRequest);
  }

  public accepterConges(id: number): Observable<any> {
    return this.http.put<Array<Conges>>(`${environment.backendHost}/conge/accepte/${id}`,id);
  }

  public refuserConges(id: number): Observable<any> {
    return this.http.put<any>(`${environment.backendHost}/conge/decline/${id}`,id);
  }
}
