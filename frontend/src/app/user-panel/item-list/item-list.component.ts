import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/service/store.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
 

  loading: boolean = false;
  itemsForm: FormGroup;

  constructor(
     private storeService: StoreService,
     private fb: FormBuilder
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
               this.addItemsInFormArray( data );
           } );
 

 }
 


 initilizeItemsArray( item: any ): FormGroup {
 
   return this.fb.group({
            category_id: [ item.category_id ],
            description: [ item.description ],
            id:          [ item.id ],
            price:       [ item.price ],
            title:       [ item.title ],
            checkbox:    [ false ]
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

 deleteItem( id: string ) {
   this.storeService
                  .deleteProduct(id)
                  .subscribe( data => {
                      console.log( data );
                  } )
 }
}
