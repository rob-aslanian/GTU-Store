import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPanelRoutingModule } from './user-panel-routing.module';
import { UserPanelComponent } from './user-panel.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [
  UserPanelComponent,
  AddItemComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    UserPanelRoutingModule
  ],
  exports: [
    ...components
  ]
})
export class UserPanelModule { }
