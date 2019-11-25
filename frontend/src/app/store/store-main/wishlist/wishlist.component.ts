import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  favourites: any [] = [];

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit() {
     this.storeService
     .getFavourites()
      .subscribe( ({ data }) => this.favourites = data)
  }

}
