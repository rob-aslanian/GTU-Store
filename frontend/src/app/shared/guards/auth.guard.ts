import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../services/authorization.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivateChild  {

  constructor(
     private  authService: AuthorizationService,
     private  route: Router,
     private jwtHelperService: JwtHelperService
  ) {

  }
  canActivateChild(

    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
 
    
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Check if is token 

    if( this.jwtHelperService.isTokenExpired() ) {
         this.authService.logOut();
         this.route.navigate(['/login']);
         return false;
    }
         
         return true;
   };
}
