import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPanelRoutingModule } from './user-panel-routing.module';
import { UserPanelComponent } from './user-panel.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { AngularEditorModule } from '@kolkov/angular-editor';


 
@NgModule({
  declarations: [
    UserPanelComponent,
    AddItemComponent,
    UserSettingsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    UserPanelRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularEditorModule,
    SharedModule
  ],
})
export class UserPanelModule { }
