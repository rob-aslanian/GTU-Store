import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StoreService } from 'src/app/store/service/store.service';
import { FormBuilder, FormGroup, FormArray, Form } from '@angular/forms';
import { IProductDetailed } from 'src/app/shared/models/product.model';
import { Router } from '@angular/router';
import { PanelService } from '../service/panel.service';
import { Observable, forkJoin } from 'rxjs';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {
 

  loading: boolean = false;
  itemsForm: FormGroup;

  @Output() itemToEdit: EventEmitter<IProductDetailed> = new EventEmitter<IProductDetailed>();

  constructor(
      
      private storeService: StoreService,
      private fb: FormBuilder,
      private router: Router,
      private panelService: PanelService

  ) { 
     this.itemsForm = this.fb.group({
        items: this.fb.array([  ])
     })
  }
 
 

  ngOnInit() {

        this.storeService
           .getProducts()
            .subscribe( ({ data }) => {
               this.loading = true;
               console.log(data);
               
               this.addItemsInFormArray( data );
           } );
          this.panelService
                   .deleteItems.subscribe(
                      () => {
                     const items =  this.itemsForm.get('items').value.map(
                              ( item, i ) => {
                                  if( item.checkbox ) {
                                       return this.panelService.removeProduct( item.id );                                          
                                  }
                              }
                              
                          ).filter( item => item )
                          this.removeItems( items )
                      }
                   )

 }
 


 initilizeItemsArray( item: any ): FormGroup {
 
   return this.fb.group({
            category_id: [ item.category_id ],
            description: [ item.description ],
            id:          [ item.id ],
            price:       [ item.price ],
            title:       [ item.title ],
            checkbox:    [ false ],
            imageUrl:   [ item.image ]
   });

 }

 addItemsInFormArray( data ): void {

   let products = this.itemsForm.get('items') as FormArray;
   data.map( item => products.push( this.initilizeItemsArray( item ) ) );

 }
 
 selectAll(e: any) {
    const selected: boolean = e.target.checked;
    const items =  this.itemsForm.get('items') as FormArray;
 
      
    items.value.map( (  item , i  ) => {
         items.at(i).get('checkbox').setValue(selected)
    });

 }

 editItem( itemId: string ) {       
      this.router.navigate([ 'panel', 'edit-item', itemId ])
 }
 
 removeItems( items: Observable<any>) {
    forkJoin( items ).subscribe( data => {
       let product = this.itemsForm.get('items') as FormArray;

        for (let i = 0; i < product.value.length; i++) {
            product.removeAt( i );
        }
    })
    
 }
}
