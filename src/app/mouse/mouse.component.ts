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
          
        }
      }
    })



   }

  ngOnInit(): void {
  }

  save(){
    const data = this.formMouse?.value as Mouse;
    this.feed.loading.next(true);

    this.mousesrv.saveMouse(data).subscribe({
      next:()=>{
        this.feed.loading.next(false);
        this.router.navigate(['home'])
      },
      error:()=>{
        this.feed.loading.next(false);
        this.feed.showMessage('Lo sentimos, no fue posible la carga');
      }
    })
  }
}
