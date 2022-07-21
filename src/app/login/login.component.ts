import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from '../api/login.service';
import { LoginRequest, LoginResponse } from '../model/login.model';
import { FeedbackService } from '../services/feedback.service';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup | undefined;
  isLoading :boolean = false;
  constructor(
    private fb: FormBuilder,
    private loginsv: LoginService,
    private feedback: FeedbackService,
    private loaclsvc: LocalService,
    private router: Router
  ) { 
    this.formLogin = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    });
  }
  loginClick(){
    const formValue = this.formLogin?.value as LoginRequest;

    this.feedback.loading.next(true);// el loading esta activo
    this.isLoading=true;//deshabilita el botón

    this.loginsv.login(formValue).subscribe({
      next: (response: LoginResponse)=>{
        
        console.log(response);

        this.loaclsvc.saveToken(response.token);//guardamos el token ver services
        this.loaclsvc.userAuthenticated.next(true);

        this.feedback.loading.next(false);// el loading esta inactivo
        this.isLoading=false;

        this.router.navigate(['home']);
      },
      error: (err) =>{
        this.feedback.loading.next(false);// el loading esta inactivo
          console.log(err.error.error);
          this.feedback.showMessage(err.error.error);
          this.isLoading=false;
         
      },
    })
  }

  ngOnInit(): void {
  }

}
