import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../shared/models/product.model'


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  path = 'http://localhost:3000';
  endPointh = '/api/v1';

  constructor(
         private http: HttpClient
  ) { }

  /**
   * Return List of all categories for store
   */
  getCategories(): Observable<any> {
      return this.http.get( `${this.path}${this.endPointh}/categories` );

  }
  getAllUsers(): Observable<any> {
     return this.http.get( `${this.path}${this.endPointh}/users` );
  }
  
  addProducts( products: FormData ): Observable<any> {
    return this.http.post( `${this.path}${this.endPointh}/item`, products )
  }
  getProducts(from = 0, to = 10): Observable<any> {
   return this.http.get( `${this.path}${this.endPointh}/item?from=${from}&to=${to}` );
  }
}
