import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { StoreRoutingModule } from './store-routing.module';
import { StoreHeaderComponent } from './store-main/store-header/store-header.component';
import { StoreMainComponent } from './store-main/store-main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LeftNavigationComponent } from './store-main/left-navigation/left-navigation.component';
import { HeaderNavigationComponent } from './store-main/header-navigation/header-navigation.component';
import { CategoriesComponent } from './store-main/left-navigation/categories/categories.component';
import { SpecialsComponent } from './store-main/left-navigation/specials/specials.component';
import { StoreItemsComponent } from './store-main/store-items/store-items.component';
import { StoreItemComponent } from './store-main/store-items/store-item/store-item.component';
import { SharedModule } from '../shared/shared.module';
import { SiteOffersComponent } from './store-main/site-offers/site-offers.component';
import { StoreItemDetailedComponent } from './store-main/store-item-detailed/store-item-detailed.component';
import { WishlistComponent } from './store-main/wishlist/wishlist.component';
import { productResolver } from './reoslver/products.resolver';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BestSellersComponent } from './store-main/left-navigation/best-sellers/best-sellers.component';

 

@NgModule({
  declarations: [
    StoreComponent, 
    StoreHeaderComponent,
    StoreMainComponent,
    LeftNavigationComponent,
    HeaderNavigationComponent,
    CategoriesComponent,
    SpecialsComponent,
    StoreItemsComponent,
    StoreItemComponent,
    SiteOffersComponent,
    StoreItemDetailedComponent,
    WishlistComponent,
    BestSellersComponent
  ],
  
  imports: [
    CommonModule,
    StoreRoutingModule,
    FontAwesomeModule,
    SharedModule,
    NgbModule
  ],
  providers: [
    productResolver
  ]
})
export class StoreModule { }
