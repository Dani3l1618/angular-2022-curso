import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MouseComponent } from '../mouse/mouse.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent

  },
  {
    path: 'mouse/:id',
    component: MouseComponent,
  },
  {
    path: 'mouse',
    component: MouseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
