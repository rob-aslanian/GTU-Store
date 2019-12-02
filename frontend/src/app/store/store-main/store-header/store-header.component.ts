import { Component, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { StoreService } from '../../service/store.service';

@Component({
  selector: 'app-store-header',
  templateUrl: './store-header.component.html',
  styleUrls: ['./store-header.component.scss']
})


export class StoreHeaderComponent implements OnInit {

  faPhone = faPhone;

  constructor(
        private storeService: StoreService
  ) {
   }

  ngOnInit() { }


  searchProducts( value: string ) {
    
      this.storeService
       .searchProductsInput
         .next( value );
         console.log(value);
  }

}
