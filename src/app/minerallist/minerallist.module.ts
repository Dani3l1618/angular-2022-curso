import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinerallistRoutingModule } from './minerallist-routing.module';
import { MineralComponent } from '../mineral/mineral.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [MineralComponent],
  imports: [
    CommonModule,
    MinerallistRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MinerallistModule { }
