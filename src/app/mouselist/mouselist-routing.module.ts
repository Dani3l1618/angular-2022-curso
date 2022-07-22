import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MouseComponent } from '../mouse/mouse.component';
import { MouselistComponent } from './mouselist.component';

const routes: Routes = [
  {
    path:'',
    component:MouselistComponent
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
export class MouselistRoutingModule { }
