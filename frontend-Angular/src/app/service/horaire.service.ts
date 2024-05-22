import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Horaire } from '../models/horaire';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoraireService {

  constructor(private http: HttpClient) { }

  public getHoraireByEmployes(cin: string|null): Observable<Array<Horaire>> {
    return this.http.get<Array<Horaire>>(`${environment.backendHost}/horaire/get/${cin}/employee`);
  }

  public addHoraire(horaire: Horaire): Observable<void> {
    return this.http.post<void>(`${environment.backendHost}/horaire/create`,horaire);
  }
}
