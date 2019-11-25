import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ilogin, Iregister } from '../models/auth.model';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})


export class AuthorizationService {
  
  endPointh = '/api/v1';

  constructor(
     private http: HttpClient,
     private cookieService: CookieService,
     private helper: JwtHelperService
  ) { 

   }

  /**
   * 
   * @param input 
   * Get login information after sucessfull login
   */
  login( input: Ilogin ): Observable<any> {
    return  this.http.post(`${this.endPointh}/auth/login`, input, this.applicationJsonHeader() );
  }
   
  /**
   *  Return application/json header for post reqeusts
   */
 private applicationJsonHeader():any {
    return {
          headers: new HttpHeaders().set('Content-Type','application/json')
     }
  }

  /**
   * 
   * @param input 
   * Registration
   */
  registerUser( input: Iregister ): Observable<any> {
    const result = JSON.stringify(input);   
    return  this.http.post(`${this.endPointh}/users`, result, this.applicationJsonHeader() );
  }
  
/**
 * Get jwt token from db
 * @param token 
 */
  parseJWTToken( token ) {
 

    const decodedToken = this.helper.decodeToken(token);

    // Save to cookies  token 
    this.cookieService.set('access_token', token, decodedToken.exp );
    // Save user info in localStorage 
    localStorage.setItem('user', JSON.stringify( decodedToken ) );
    
  }
  
  checkIfUserisLoggedIn() : boolean {
     return localStorage.length > 0 ? true : false;
  };

  // Clear local storage
  logOut( ): void {
     localStorage.clear();
  }

  // Get user id 

  getActiveUserId(): string {
 
    if( !this.helper.isTokenExpired() ) {
          const parseJson = JSON.parse(localStorage.getItem('user'))
          return parseJson['user_id'];
    }
  }

  
}
