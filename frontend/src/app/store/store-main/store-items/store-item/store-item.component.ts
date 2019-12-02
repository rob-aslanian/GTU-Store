import { Component, OnInit, OnDestroy } from '@angular/core';

//Svg
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { StoreService } from 'src/app/store/service/store.service';
import { ActivatedRoute } from '@angular/router';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
//Svg


@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss']
})


export class StoreItemComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  faHeart = faHeart;
  faEye = faEye;
  faArrowAltCircleRight = faArrowAltCircleRight;
  products: any;
  loading: boolean = false;
  page: number = 0;
  activeUserId: string;

  constructor(
    private activatedRoute:  ActivatedRoute,
    private storeService:    StoreService,
    private authService:     AuthorizationService
  ) { 

  }

  ngOnInit() {    

   this.loading = false;

   this.activatedRoute.data.subscribe( 
      ( { products } ) => {
           this.loading  = true;  
           this.products = products;           
      }
   )

  this.activeUserId =  this.authService.getActiveUserId();


  // Search 
  this.storeService
  .searchProductsInput 
  .pipe(
    debounceTime(400),
    distinctUntilChanged(),
    switchMap( (input) => {
         const formData: FormData = new FormData();

         formData.append('query', input)

         return this.storeService.searchProducts( formData )
    } )
  ).subscribe(  ({ data })  => {

    this.products.data = data;
    this.products.items_count = 0;

    
  } )
 
  
 };

 onPageChange() {

  const categoryId = this.activatedRoute.snapshot.params['category'] 
  
  const from = (this.page * 12 ) - 12 ; 

    this.storeService
      .getProducts( categoryId, from )
       .subscribe( data => 
         this.products =  data
       );
       
 }

 addToFavourites( item_id: string, idx: number ) {
 
  const formData: FormData = new FormData();

  formData.append( 'item_id', item_id )

  this.products['data'][idx].has_liked = true;

  this.storeService.changesInProducts.next( 'increment' );


  return   this.storeService
              .addToFavourites( formData )
              .subscribe( )
 }

 removeFromFavourites( item_id: string, idx: number ) {

  this.products['data'][idx].has_liked = false


  this.storeService.changesInProducts.next( 'decrement' );


  return this.storeService
           .removeFromFavourites(item_id)
              .subscribe( );



 }

};