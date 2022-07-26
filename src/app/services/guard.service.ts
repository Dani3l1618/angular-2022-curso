import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
//Este servicio permitirá validar la activación de una página
export class GuardService implements CanActivate {

  constructor(private localsvc: LocalService, private router:Router) { }

  //validar con un token
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //Lógica de validación de acceso a la ruta

    const validToken = this.localsvc.hasValidToken();
    if(!validToken){
      this.router.navigate(['login']);
    }
    return validToken;
  }
}
