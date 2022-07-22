import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MouseService } from '../api/mouse.service';
import { Mouse } from '../model/data.model';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.scss']
})


export class MouseComponent implements OnInit {
  title='Crear elemento';
  id?: number;
  formMouse: FormGroup|undefined;

  constructor(
    private fb: FormBuilder,
    private mousesrv: MouseService,
    private feed: FeedbackService,
    private router: Router,
    private activeRoute: ActivatedRoute
    ) 
    {
    this.formMouse= this.fb.group({
      brand:['',Validators.required],
      model:['',Validators.required],
      type:['',Validators.required],
      year:['',Validators.required],
    });

    this.activeRoute.params.subscribe({
      next:(p) =>{
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
    this.mousesrv.getMouse(this.id!).subscribe({
      next: (item)=>{
        this.feed.loading.next(false);
        this.formMouse?.patchValue(item);
      },
      error:()=>{
        this.feed.loading.next(false);
        this.feed.showMessage('No se pudo cambiar el elemento');
      }
    })
  }

  save(){
    const data = this.formMouse?.value as Mouse;
    this.feed.loading.next(true);

    this.mousesrv.saveMouse(data,this.id).subscribe({
      next:()=>{
        this.feed.loading.next(false);
        this.router.navigate(['home/mouselist'])
      },
      error:()=>{
        this.feed.loading.next(false);
        this.feed.showMessage('Lo sentimos, no fue posible la carga');
      }
    })
  }
}
