import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../shared/models/product.model'


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  endPointh = '/api/v1';

  constructor(
         private http: HttpClient
  ) { }

  /**
   * Return List of all categories for store
   */
  getCategories(): Observable<any> {
      return this.http.get( `${this.endPointh}/categories` );
  }
  
  getAllUsers(): Observable<any> {
     return this.http.get( `${this.endPointh}/users` );
  }
  

  getProducts( category_id?: string,  from = 0, to = 10 ): Observable<any> {    
   return category_id ?
    this.http.get( `${this.endPointh}/item/?from=${from}&to=${to}&category_id=${category_id}` )
    : this.http.get( `${this.endPointh}/item/?from=${from}&to=${to}` );
  };
   

  deleteProduct( id: string ): Observable<any> {
     return this.http.delete( `${this.endPointh}/item/${id}` );
  }

  getProduct( id: string ): Observable<any> {
     return this.http.get( `${this.endPointh}/item/${id}` );
  }
  
}
