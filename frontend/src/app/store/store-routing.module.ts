import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreMainComponent } from './store-main/store-main.component';
import { StoreItemsComponent } from './store-main/store-items/store-items.component';
import { StoreItemDetailedComponent } from './store-main/store-item-detailed/store-item-detailed.component'




const routes: Routes = [

{ path: '', redirectTo:'store', pathMatch: 'full' },
   { path: 'store', component: StoreMainComponent,
      children: [
         { path: '', pathMatch: 'full', redirectTo:'items' },
         { path: 'items', component: StoreItemsComponent }, 
         { path: 'items/:category', component: StoreItemsComponent }, 
         { path: 'item/:id', component: StoreItemDetailedComponent },
      ],
  
   }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StoreRoutingModule { }
