import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment.development';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private http:HttpClient) { }

  public getEmployesByDepartement(nom:string):Observable<Array<User>>
  {
    return this.http.get<Array<User>>(`${environment.backendHost}/user/get/{nom}/departement?nom=${nom}`);
  }

  public deleteUser(cin:string){
    return this.http.delete<any>(`${environment.backendHost}/user/delete/${cin}`)
  }
}
