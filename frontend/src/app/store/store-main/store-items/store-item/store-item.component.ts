import { Component, OnInit } from '@angular/core';

//Svg
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { StoreService } from 'src/app/store/service/store.service';
import { ActivatedRoute } from '@angular/router';
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
  products: any[];
  loading: boolean = false;
  page: number = 0;
  

  constructor(
    private activatedRoute:  ActivatedRoute,
    private storeService:    StoreService
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

 };

 onPageChange() {

  const categoryId = this.activatedRoute.snapshot.params['category'] 


  console.log(categoryId);
  
  const from = (this.page * 12 ) - 12 ; 

    this.storeService
      .getProducts( categoryId, from )
       .subscribe( data => 
         this.products =  data
       );
       
 }
}