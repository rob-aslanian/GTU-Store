import { Component, OnInit } from '@angular/core';

// Svg
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
import { StoreService } from '../../service/store.service';
//Svg
@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})

export class HeaderNavigationComponent implements OnInit {

  
  faHome   = faHome;
  faStar   = faStar;
  faUser   = faUser;
  faRocket = faRocket;
  faCheck  = faCheck;
  faShoppingCart = faShoppingCart ;
  addedProductsCount: number = 0;
  isActiveUser: boolean;

  constructor(
     private authService:  AuthorizationService,
     private storeService: StoreService
  ) { }

  ngOnInit() {

      this.isActiveUser =  this.authService.checkIfUserisLoggedIn();   
      
      // Get products Length
      
      this.storeService
      .getFavourites()
      .subscribe( ( { data } ) => this.addedProductsCount = data.length );

      // Notify changes in Products

      this.storeService
       .changesInProducts
        .subscribe( ( type: string ) => {
          console.log(type);
          
             if( type === 'increment' ) {
              console.log(this.addedProductsCount);
                 return this.addedProductsCount++;
           
                 
             } else {
              console.log(this.addedProductsCount);
                 return this.addedProductsCount--;

             }
            
        })

  }

  logOut() {
    this.authService.logOut();
  }
}
