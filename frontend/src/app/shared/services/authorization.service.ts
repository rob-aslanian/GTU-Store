import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ilogin, Iregister } from '../models/auth.model';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})


export class AuthorizationService {
  
  endPointh = '/api/v1';

  constructor(
     private http: HttpClient
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
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(token);

    // Save to Local Storage
    localStorage.setItem( 'access_token', token );
    localStorage.setItem('user', JSON.stringify( decodedToken ) );
    
  }
  
  checkIfUserisLoggedIn() : boolean {
     return localStorage.length > 0 ? true : false;
  };

  // Clear local storage
  logOut( ): void {
     localStorage.clear();
  }

}
