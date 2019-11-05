import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ilogin, Iregister } from '../models/auth.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthorizationService {
  
  path = 'http://localhost:3000';
  endPointh = '/api/v1';

  constructor(
     private http: HttpClient
  ) {  }

  /**
   * 
   * @param input 
   * Get login information after login
   */
  login( input: Ilogin ): Observable<any> {
    return  this.http.post(`${this.path}${this.endPointh}/auth/login`, input );
  }

  /**
   * 
   * @param input 
   * Registration
   */
  registerUser( input: Iregister ): Observable<any> {
    const result = JSON.stringify(input);
    return  this.http.post(`${this.path}${this.endPointh}/users`, result )
  }
   
}
