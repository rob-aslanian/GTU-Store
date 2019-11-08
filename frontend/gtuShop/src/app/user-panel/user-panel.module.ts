import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPanelRoutingModule } from './user-panel-routing.module';
import { UserPanelComponent } from './user-panel.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
    UserPanelRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ...components
  ]
})
export class UserPanelModule { }
