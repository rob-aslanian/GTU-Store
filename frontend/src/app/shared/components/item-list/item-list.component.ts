import { Component, OnInit, Output, EventEmitter, OnDestroy, Input, OnChanges } from '@angular/core';
import { StoreService } from 'src/app/store/service/store.service';
import { FormBuilder, FormGroup, FormArray, Form } from '@angular/forms';
import { IProductDetailed } from 'src/app/shared/models/product.model';
import { Router } from '@angular/router';
import {  forkJoin, Observable } from 'rxjs';
import { PanelService } from 'src/app/user-panel/service/panel.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit, OnDestroy, OnChanges {
 

  loading: boolean = false;
  userProducts: IProductDetailed[] = [];
  canDelete: boolean = false;

  @Output() itemToEdit: EventEmitter<IProductDetailed> = new EventEmitter<IProductDetailed>();

  @Input()  data: any;
  @Input()  isFavourite: boolean = false;

 

  constructor(
      private router: Router,
      private panelService: PanelService

  ) {  }
 

  ngOnInit() {
   this.loading = true;

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

 ngOnChanges() {
   if( this.data ) {
       this.parseData(this.data);
   }
};

 
 parseData( products: IProductDetailed[] ) {
   this.loading = false;
   this.userProducts =  products.map( 
         (product) => {
               return {
                  ...product,
                  isSelect: false
               }
         }
      );
     
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
    this.checkIfItemSeleted();
 }

 removeDeletedIProducts() {
   this.userProducts = this.userProducts.filter( item => !item.isSelect );
   this.checkIfItemSeleted();

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
 
 checkIfItemSeleted() {
      return this.userProducts.map( 
         item => item.isSelect 
      ).includes(true)  ? this.canDelete = true : this.canDelete = false; 
 }

 deleteItems() {
   this.deleteProductsFromDb().subscribe(
      () => this.removeDeletedIProducts()
   )
 }

 ngOnDestroy() {
    this.panelService.addProduct.complete();
 }
 
}
