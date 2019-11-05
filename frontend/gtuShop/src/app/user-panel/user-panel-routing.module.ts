import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { UserPanelComponent } from './user-panel.component';


const routes: Routes = [
     { path: 'panel', component: UserPanelComponent ,
        children: [
           { path: 'admin', component: AddItemComponent  },
           { path: '', pathMatch: 'full', redirectTo: 'admin' }
        ]
     }
];

@NgModule({
  imports: [RouterModule
    .forChild(routes)],
  exports: [RouterModule]
})
export class UserPanelRoutingModule { }
