import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../services/guard.service';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'mouselist',
    canActivate: [GuardService], //permite la validacion
    loadChildren: ()=> import('./../mouselist/mouselist.module').then((m)=>m.MouselistModule),
 
  },
  {
    path:'minerallist',
    canActivate: [GuardService], //permite la validacion
    loadChildren:()=> import('./../minerallist/minerallist.module').then((m)=>m.MinerallistModule),
 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
