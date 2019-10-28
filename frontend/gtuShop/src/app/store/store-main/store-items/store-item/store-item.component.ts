import { Component, OnInit } from '@angular/core';

//Svg
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
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
  
  constructor() { }

  ngOnInit() {
  }

}
