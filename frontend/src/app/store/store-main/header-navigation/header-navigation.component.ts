import { Component, OnInit } from '@angular/core';

// Svg
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';
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

  isActiveUser: boolean;

  constructor(
     private authService: AuthorizationService
  ) { }

  ngOnInit() {
      this.isActiveUser =  this.authService.checkIfUserisLoggedIn();      
  }

}
