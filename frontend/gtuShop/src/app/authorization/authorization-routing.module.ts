import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthorizationComponent } from './authorization.component';


const routes: Routes = [
        { path:'login', component: LoginComponent},
        { path:'register', component: RegisterComponent,  } ,
        { path:'api/v1/auth/verify/:token', component: AuthorizationComponent,  } 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthorizationRoutingModule { }
