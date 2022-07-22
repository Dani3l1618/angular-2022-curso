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
}
