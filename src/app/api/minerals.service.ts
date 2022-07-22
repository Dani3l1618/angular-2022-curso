import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mineral } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class MineralsService {

  constructor(private http:HttpClient) { }

  getMinerales(){
    return this.http.get<Mineral[]>(`${environment.apiUrl}/minerales`);
  }

  getMineral(id:number){
    return this.http.get<Mineral>(`${environment.apiUrl}/minerales/${id}`);
  }

  saveMineral(data:Mineral,id?:number){
    if(id){
      return this.http.put(`${environment.apiUrl}/minerales/${id}`,data);
    }

    return this.http.post(`${environment.apiUrl}/minerales/`,data);
  }

  deleteMineral(id:number){
    return this.http.delete(`${environment.apiUrl}/minerales/${id}`);
  }
}
