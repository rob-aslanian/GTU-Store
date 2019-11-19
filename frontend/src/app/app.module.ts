import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizationModule } from './authorization/authorization.module';
import { StoreModule } from './store/store.module';
import { UserPanelModule } from './user-panel/user-panel.module';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';




export function jwtTokenGetter() {
  return  localStorage.getItem("access_token")
}

  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule,
    AuthorizationModule,
    UserPanelModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot({
       config: {
           tokenGetter: jwtTokenGetter,
           whitelistedDomains: [
             'localhost:3000',
             'localhost:4200',
             'https://gtushop.nl'
            ]
            
       }
    })
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
