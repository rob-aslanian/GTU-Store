import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizationModule } from './authorization/authorization.module';
import { StoreModule } from './store/store.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule,
    AuthorizationModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
