import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreMainComponent } from './store-main/store-main.component';
import { StoreItemsComponent } from './store-main/store-items/store-items.component';




const routes: Routes = [

   { path: '', redirectTo:'store', pathMatch: 'full' },
   { path: 'store', component: StoreMainComponent,
      children: [
         { path: 'items', component: StoreItemsComponent },
         { path: '', pathMatch: 'full', redirectTo:'items' }
      ]
   }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StoreRoutingModule { }
