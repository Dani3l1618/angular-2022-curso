import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m)=> m.LoginModule),
  },
  {
    path: 'home',
    canActivate: [GuardService], //permite la validacion
    loadChildren: ()=> import('./home/home.module').then((m)=>m.HomeModule),
  },
  {
    path:'**', //permite controlar rutas no validas
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
