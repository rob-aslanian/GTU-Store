import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
//Svg 
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Ilogin } from 'src/app/shared/models/auth.model';
//Svg

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
 

  loginForm: FormGroup;
  isSubmitted: boolean = false;
  faSignInAlt = faSignInAlt;

  constructor(

    private fb: FormBuilder,
    private authService: AuthorizationService

  ) { 
    this.loginForm = this.fb.group({
        email: ['', Validators.compose([ Validators.required, Validators.email ])],
        password: ['', Validators.required]
    })
  }

   get logCtrls() {
      return this.loginForm.controls;
   }

   ngOnInit() {
   }

   submit() {
    this.isSubmitted = true;

    if( !this.loginForm.valid ) {
       return;
    }

    const { email, password } = this.loginForm.controls;
    const input: Ilogin = { email: email.value, password: password.value };
 
    
    this.authService.login( input ).subscribe( data => console.log( data ) );
    
   }

}
