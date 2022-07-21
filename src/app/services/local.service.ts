import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//Este servicio implementa el guardado de token
export class LocalService {

  userAuthenticated =  new Subject<boolean>();
  
  constructor() { }

  saveToken(token: string){
    //Sirven para guardar datos
    //sessionStorage //se elimina cuando se cierra el navegador
    localStorage.setItem('token',token); // prmanece siempre y cuando el usuario no lo borre explícitamente. 
    
  }
  //valida si ya existe el token
  hasValidToken(): boolean{
    return Boolean(localStorage.getItem('token'));
  }

  removeToken(){
    localStorage.removeItem('token');
  }
}
