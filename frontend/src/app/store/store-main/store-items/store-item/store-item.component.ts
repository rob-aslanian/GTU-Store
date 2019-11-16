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
  categoryId: string;
  
  constructor(
    private storeService: StoreService,
    private activatedRoute: ActivatedRoute
  ) { 
       this.categoryId = activatedRoute.snapshot.params['category'];
  }

  ngOnInit() {    
    this.storeService.getProducts(this.categoryId).subscribe( ({ data }) => {
        this.products = data
        this.loading  = true;      
    } )
  }


}
