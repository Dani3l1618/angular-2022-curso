import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MineralsService } from '../api/minerals.service';
import { Mineral } from '../model/data.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-mineral',
  templateUrl: './mineral.component.html',
  styleUrls: ['./mineral.component.scss']
})
export class MineralComponent implements OnInit {
  title = 'Crear elemento';
  id?: number;
  forMineral: FormGroup| undefined;

  constructor(
    private fb: FormBuilder,
    private minerlsrv: MineralsService,
    private feed: FeedbackService,
    private router: Router,
    private activeRoute: ActivatedRoute

  ) 
  {
    this.forMineral = this.fb.group({
      name:['',Validators.required],
      formula:['',Validators.required],
      category:['',Validators.required],
      crystal:['',Validators.required],
      mohs:['',Validators.required],
      density:['',Validators.required],
    });

    this.activeRoute.params.subscribe({
      next:(p)=>{
        if(p['id']){
          this.title='Modificar elemento';
          this.id=p['id'];
          this.getData();
        }
      }
    })
   }

  ngOnInit(): void {
  }

  getData(){
    this.feed.loading.next(true);
    this.minerlsrv.getMineral(this.id!).subscribe({
      next: (item) =>{
        this.feed.loading.next(false);
        this.forMineral?.patchValue(item);
      },
      error:()=>{
        this.feed.loading.next(false);
        this.feed.showMessage('No se pudo cambiar el elemento');
      }
    })
  }

  save(){
    const data = this.forMineral?.value as Mineral;
    this.feed.loading.next(true);

    this.minerlsrv.saveMineral(data,this.id).subscribe({
      next:()=>{
        this.feed.loading.next(false);
        this.router.navigate(['home/minerallist'])
      },
      error:()=>{
        this.feed.loading.next(false);
        this.feed.showMessage('Lo sentimos, no fue posible la carga');
      }
    })
  }

}
