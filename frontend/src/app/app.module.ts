import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizationModule } from './authorization/authorization.module';
import { StoreModule } from './store/store.module';
import { UserPanelModule } from './user-panel/user-panel.module';

import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



export function jwtOptionsFactory( cookieService: CookieService ) {
  return {
    tokenGetter: () =>  cookieService.get('access_token'),
    whitelistedDomains: [
           'localhost:3000',
           'localhost:4200',
           'https://gtushop.nl'
    ]
  }
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
        jwtOptionsProvider: {
            provide: JWT_OPTIONS,
            useFactory: jwtOptionsFactory,
            deps: [ CookieService ]
        } 
    })
 
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// config: {
//   tokenGetter: jwtTokenGetter,
//   whitelistedDomains: [
//     'localhost:3000',
//     'localhost:4200',
//     'https://gtushop.nl'
//    ]
   
// }