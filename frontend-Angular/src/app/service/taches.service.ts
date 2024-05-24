import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Taches } from '../models/taches';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { TachesRequest } from '../models/taches-request';

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  constructor(private http: HttpClient) { }

  public getTachesByEmployes(cin: string): Observable<Array<Taches>> {
    return this.http.get<Array<Taches>>(`${environment.backendHost}/taches/get/${cin}/employee`);
  }

  public createTaches(request: TachesRequest): Observable<any> {
    return this.http.post<any>(`${environment.backendHost}/taches/create`,request);
  }


  public terminerTaches(id: number): Observable<any> {
    return this.http.put<any>(`${environment.backendHost}/taches/terminer/${id}`,id);
  }
}
