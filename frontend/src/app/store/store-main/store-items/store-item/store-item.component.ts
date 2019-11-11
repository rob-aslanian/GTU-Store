import { Component, OnInit } from '@angular/core';

//Svg
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { StoreService } from 'src/app/store/service/store.service';
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
  
  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit() {
    this.storeService.getProducts().subscribe( ({ data }) => {
      this.products = data
      this.loading  = true;
    } )
  }

}
