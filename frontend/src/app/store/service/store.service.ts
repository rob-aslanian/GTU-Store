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
  
  addProducts( products: FormData ): Observable<any> {
    return this.http.post( `${this.endPointh}/item`, products )
  }

  getProducts(from = 0, to = 10): Observable<any> {
   return this.http.get( `${this.endPointh}/item?from=${from}&to=${to}` );
  }
  
  deleteProduct( id: string ): Observable<any> {
     return this.http.delete( `${this.endPointh}/item/${id}` );
  }

  getProduct( id: string ): Observable<any> {
     return this.http.get( `${this.endPointh}/item/${id}` );
  }
  
}
