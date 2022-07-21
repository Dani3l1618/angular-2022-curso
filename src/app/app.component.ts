import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from './services/feedback.service';
import { LocalService } from './services/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-2022-curso';
  isloading = false;
  isLogged = false;

  constructor(private feedback: FeedbackService,private localsvs: LocalService,private router: Router){
    this.feedback.loading.subscribe({
      next: (isloading) =>{
        this.isloading = isloading;
      }
    })

    this.isLogged = this.localsvs.hasValidToken();
    this.localsvs.userAuthenticated.subscribe({
      next: userAuth =>{
        this.isLogged = userAuth;
      }
    })
  }

  logout(){
    this.isLogged = false;
    this.localsvs.removeToken();
    this.router.navigate(['login']);
    
  }
  
}
