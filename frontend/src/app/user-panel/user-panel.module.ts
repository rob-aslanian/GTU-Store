import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPanelRoutingModule } from './user-panel-routing.module';
import { UserPanelComponent } from './user-panel.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ItemListComponent } from './item-list/item-list.component';
import { SharedModule } from '../shared/shared.module';

const components = [
  UserPanelComponent,
  AddItemComponent
];

@NgModule({
  declarations: [
    ...components,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    UserPanelRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    ...components
  ]
})
export class UserPanelModule { }
