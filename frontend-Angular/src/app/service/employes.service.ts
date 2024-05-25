import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment.development';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { UserRequest } from '../models/user-request';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(private http:HttpClient) { }

  public getEmployesByDepartement(nom:string):Observable<Array<User>>
  {
    return this.http.get<Array<User>>(`${environment.backendHost}/user/get/${nom}/departement`);
  }

  public getEmployesByRh(cin:string):Observable<Array<User>>
  {
    return this.http.get<Array<User>>(`${environment.backendHost}/user/get/${cin}/rh`);
  }

  public getallRH():Observable<Array<User>>
  {
    return this.http.get<Array<User>>(`${environment.backendHost}/user/get/all/rh`);
  }

  public getByCin(cin:string | null = null):Observable<User>
  {
    return this.http.get<User>(`${environment.backendHost}/user/get/${cin}`);
  }

  
  public deleteUser(cin:string){
    return this.http.delete<any>(`${environment.backendHost}/user/delete/${cin}`)
  }

  public addUser(formData:FormData) {
    return this.http.post<any>(`${environment.backendHost}/user/create`, formData);
  }

  public modifyUser(formData:FormData,cin:string) {
    return this.http.put<any>(`${environment.backendHost}/user/update/{cin}?cin=${cin}`, formData);
  }
}
