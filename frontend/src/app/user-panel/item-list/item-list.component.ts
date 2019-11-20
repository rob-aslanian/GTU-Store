import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { StoreService } from 'src/app/store/service/store.service';
import { FormBuilder, FormGroup, FormArray, Form } from '@angular/forms';
import { IProductDetailed } from 'src/app/shared/models/product.model';
import { Router } from '@angular/router';
import { PanelService } from '../service/panel.service';
import {  forkJoin, Observable } from 'rxjs';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit, OnDestroy {
 

  loading: boolean = false;
  userProducts: IProductDetailed[] = [];

  @Output() itemToEdit: EventEmitter<IProductDetailed> = new EventEmitter<IProductDetailed>();

  constructor(
      private router: Router,
      private panelService: PanelService

  ) {  }
 
 

  ngOnInit() {

  //Get list user of items
        this.panelService
           .getUserProducts()
            .subscribe( ({ data }) => {
               this.parseData( data );
               this.loading = true;               
           } );

  // Remove items on subject next 
          this.panelService
                   .deleteItems.subscribe(
                      () => {

                        this.deleteProductsFromDb().subscribe(
                           () => this.removeDeletedIProducts()
                        )
                     }
               )
  // Get added files
          this.panelService
                   .addProduct.subscribe(
                      ( data: IProductDetailed ) => {
                          if( data  ) {
                             this.userProducts.unshift( data  )
                          }
                      } 
                   )

 }
 
 
 parseData( products: IProductDetailed[] ) {

   this.userProducts =  products.map( 
         (product) => {
               return {
                  ...product,
                  isSelect: false
               }
         }
      );
   this.loading = true;       
     
 }
 
// Edit
 editItem( itemId: string ) {       
      this.router.navigate([ 'panel', 'edit-item', itemId ])
 }
 
 // Select all checkbox
 selectAll( e: any ) {
    const isChecked = e.target.checked;
   
    this.userProducts.map(
       ( _ ,i ) => {
            this.userProducts[i].isSelect = isChecked;
       }
    )
    
 }

 removeDeletedIProducts() {
   this.userProducts = this.userProducts.filter( item => !item.isSelect )

 }

 deleteProductsFromDb(  ): Observable<any> {

    const selectedItems = this.userProducts.map( 
       ( item ) => {
         if( item.isSelect ) {
            return this.panelService.removeProduct( item.id )
         }
       }
     ).filter( item => item );

    return forkJoin(
         selectedItems
    )
 }
 
 ngOnDestroy() {
    this.panelService.deleteItems.complete();
    this.panelService.addProduct.complete();
 }
 
}
