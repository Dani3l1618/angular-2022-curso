import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MouselistRoutingModule } from './mouselist-routing.module';
import { MouseComponent } from '../mouse/mouse.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [MouseComponent],
  imports: [
    CommonModule,
    MouselistRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MouselistModule { }
