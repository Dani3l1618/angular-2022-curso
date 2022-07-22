import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mouse } from '../model/data.model';

@Injectable({
  providedIn: 'root'
})
export class MouseService {

  constructor(private http: HttpClient) { }

  getMouses(){
    return this.http.get<Mouse[]>(`${environment.apiUrl}/mouse`);
  }

  getMouse(id:number){
    return this.http.get<Mouse>(`${environment.apiUrl}/mouse/${id}`);
  }
  
  saveMouse(data:Mouse,id?:number){
   
    if(id){
      return this.http.put(`${environment.apiUrl}/mouse/${id}`,data);
    }

    return this.http.post(`${environment.apiUrl}/mouse/`,data);
  }

  deleteMouse(id:number){
    return this.http.delete(`${environment.apiUrl}/mouse/${id}`);
  }
}
