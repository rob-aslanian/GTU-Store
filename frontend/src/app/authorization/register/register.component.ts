import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { Iregister } from 'src/app/shared/models/auth.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(
     private fb: FormBuilder,
     private auth: AuthorizationService
  ) { 
   this.registerForm =   this.fb.group({

      first_name: ['', Validators.required],
      last_name:  ['', Validators.required],
      email:      ['', Validators.required],
      password:   ['', Validators.required]

     })
  }

  get regCtrls() {
     return this.registerForm.controls;
  }

  ngOnInit() {
  }


  submit() {
    this.submitted = true;

    if( !this.registerForm.valid ) {
       return;
    }
   
    const { first_name, last_name, email, password } = this.registerForm.controls;

    const input: Iregister = {
            first_name: first_name.value,
            last_name:  last_name.value,
            email:      email.value,
            password:   password.value
    }

    this.auth.registerUser( input ).subscribe( data => console.log( data ) )
  }
}
