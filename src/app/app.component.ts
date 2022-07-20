import { Component } from '@angular/core';
import { FeedbackService } from './services/feedback.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-2022-curso';
  isloading = false;

  constructor(private feedback: FeedbackService){
    this.feedback.loading.subscribe({
      next: (isloading) =>{
        this.isloading = isloading;
      }
    })
  }
  
}
