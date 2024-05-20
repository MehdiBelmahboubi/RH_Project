import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Taches } from '../models/taches';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  constructor(private http: HttpClient) { }

  public getTachesByEmployes(cin: string): Observable<Array<Taches>> {
    return this.http.get<Array<Taches>>(`${environment.backendHost}/taches/get/${cin}/employee`);
  }
}
