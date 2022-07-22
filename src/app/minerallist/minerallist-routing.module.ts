import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MineralComponent } from '../mineral/mineral.component';
import { MinerallistComponent } from './minerallist.component';

const routes: Routes = [
  {
    path:'',
    component:MinerallistComponent
  },
  {
    path: 'mineral/:id',
    component: MineralComponent,

  },
  {
    path:'mineral',
    component:MineralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinerallistRoutingModule { }
