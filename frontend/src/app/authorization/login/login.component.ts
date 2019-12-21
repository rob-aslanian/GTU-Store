import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { catchError } from 'rxjs/operators'

//Svg 
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Ilogin } from 'src/app/shared/models/auth.model';
import { Router } from '@angular/router';
import { of } from 'rxjs';
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
  err: boolean = false;

  constructor(

    private fb: FormBuilder,
    private authService: AuthorizationService,
    private router: Router,


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

       // Check if user is already logged in 
       if( !this.authService.checkIfUserisLoggedIn() ) {
              this.router.navigate(['/store'])
       }
   
   }

   submit() {
    this.isSubmitted = true;

    if( !this.loginForm.valid ) {
       return;
    }

    const { email, password } = this.loginForm.controls;
    const input: Ilogin = { email: email.value, password: password.value };
    this.authService.login( input ).pipe( catchError( err => {
                                            this.err = true ;
                                            return of( false );
                                            } ) ).subscribe( data => {
                                                if( data ) {
                                                      const { auth_token } = data;
                                                      this.authService.parseJWTToken( auth_token );
                                                      this.router.navigateByUrl("/store");
                                                }   

                                            } );
    
   }

}
