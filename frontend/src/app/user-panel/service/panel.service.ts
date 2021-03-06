import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProductDetailed } from '../../shared/models/product.model';
 
 



@Injectable({
  providedIn: 'root'
})

export class PanelService {

  endPointh = '/api/v1';
  addProduct:    Subject<IProductDetailed> = new Subject<IProductDetailed>();

  constructor(
    private http: HttpClient
  ) { }


  addProducts( products: FormData ): Observable<any> {
    return this.http.post( `${this.endPointh}/item`, products );
  }
  
  deleteImage( imageId: string ) {
    return this.http.delete( `${this.endPointh}/image/${ imageId }` )
  }
  
  updateProduct( product: FormData, productId: string ) {
    return this.http.patch(`${this.endPointh}/item/${productId}`, product);
  }

  removeProduct( itemId: string  ): Observable<any> {
    return this.http.delete( `${this.endPointh}/item/${ itemId }` )
  }

  getUserProducts(): Observable<any> {
    return this.http.get(`${this.endPointh}/user_items`);
  }
  
  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.endPointh}/users/${id}`);
  }
  
  saveUserUploadedImage( image: FormData ): Observable<any> {
    return this.http.post(`${this.endPointh}/upload/user`, image);
  }

  removeUserUploadedImage( ): Observable<any> {
    return this.http.delete(`${this.endPointh}/upload/user`);
  }
  
  editUser( id: string, input: FormData ): Observable<any> {
     return this.http.patch(`${this.endPointh}/users/${id}`, input)
  }
 
}
