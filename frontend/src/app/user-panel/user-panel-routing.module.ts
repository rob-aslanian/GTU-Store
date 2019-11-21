import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { UserPanelComponent } from './user-panel.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { UserSettingsComponent } from './user-settings/user-settings.component';


const routes: Routes = [
     { path: 'panel', component: UserPanelComponent , canActivateChild: [ AuthGuard ] ,
        children: [
           { path: 'add-item', component: AddItemComponent  },
           { path: 'edit-item/:id', component: AddItemComponent },
           { path: '', pathMatch: 'full', redirectTo: 'add-item' },
           { path: 'user-settings', component: UserSettingsComponent }
        ]
     },
  
];

@NgModule({
  imports: [RouterModule
    .forChild(routes)],
  exports: [RouterModule]
})
export class UserPanelRoutingModule { }
