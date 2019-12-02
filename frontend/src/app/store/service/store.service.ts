import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})



export class StoreService {

  endPointh = '/api/v1';

  /**
   * increment and decrement products 
   * 
   */
  changesInProducts: Subject<string> = new Subject<string>();

  /**
   * Search Products from header component
   */

  searchProductsInput: Subject<string> = new Subject<string>();


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
  

  getProducts( category_id?: string,  from = 0, to = 12 ): Observable<any> {    
   return category_id && category_id != '1' ?
    this.http.get( `${this.endPointh}/item/?from=${from}&to=${to}&category_id=${category_id}` )
    : this.http.get( `${this.endPointh}/item/?from=${from}&to=${to}` );
  };
   

  deleteProduct( id: string ): Observable<any> {
     return this.http.delete( `${this.endPointh}/item/${id}` );
  }

  getProduct( id: string ): Observable<any> {
     return this.http.get( `${this.endPointh}/item/${id}` );
  }

  addToFavourites( item_id: FormData ): Observable<any> {
     return this.http.post(`${this.endPointh}/reaction`, item_id);
  }
  
  getFavourites(): Observable<any> {
     return this.http.get(`${this.endPointh}/reaction`)
  }

  removeFromFavourites( item_id: any ): Observable<any> {
     return this.http.delete( `${this.endPointh}/reaction/${item_id}` );
  }

  searchProducts( query: FormData ): Observable<any> {
   return this.http.post(`${this.endPointh}/find_item`,  query);
 }

  getTopProducts(): Observable<any> {
   return this.http.get(`${this.endPointh}/top_items`);
  }

  getTodayItems(): Observable<any> {
   return this.http.get(`${this.endPointh}/today_items`);
  }

}
