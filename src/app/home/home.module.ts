import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MouselistComponent } from '../mouselist/mouselist.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MinerallistComponent } from '../minerallist/minerallist.component';


@NgModule({
  declarations: [
    HomeComponent,
    MouselistComponent,
    MinerallistComponent,
   
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule

    
  ]
})
export class HomeModule { }
