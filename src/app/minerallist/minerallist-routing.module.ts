import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinerallistComponent } from './minerallist.component';

const routes: Routes = [
  {
    path:'',
    component:MinerallistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinerallistRoutingModule { }
