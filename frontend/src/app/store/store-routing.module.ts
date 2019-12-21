import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreMainComponent } from './store-main/store-main.component';
import { StoreItemsComponent } from './store-main/store-items/store-items.component';
import { StoreItemDetailedComponent } from './store-main/store-item-detailed/store-item-detailed.component'
import { WishlistComponent } from './store-main/wishlist/wishlist.component';
import { productResolver } from './reoslver/products.resolver';
import { AuthGuard } from '../shared/guards/auth.guard';




const routes: Routes = [

  
   { path: 'store', component: StoreMainComponent,  canActivateChild: [ AuthGuard ] ,
      children: [
         { path: '', pathMatch: 'full', redirectTo:'items' },
         { path: 'items', component: StoreItemsComponent, resolve: { products: productResolver }, 
           runGuardsAndResolvers:'always' }, 
         { path: 'items/:category', component: StoreItemsComponent, resolve: { products: productResolver }, 
           runGuardsAndResolvers:'always' }, 
         { path: 'item/:id', component: StoreItemDetailedComponent },
         { path: 'wishlist', component: WishlistComponent },
      ],
  
   }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StoreRoutingModule { }
