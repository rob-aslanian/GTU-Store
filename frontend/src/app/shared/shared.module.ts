import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorizationService } from './services/authorization.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CatPipe } from './pipes/cat.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SliderComponent } from './components/slider/slider.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const components = [
      FooterComponent,
      CatPipe,
      SpinnerComponent,
      SliderComponent,
      ItemListComponent,
      PageNotFoundComponent  
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ...components,
    FontAwesomeModule
  ],
  providers: [
    AuthorizationService
  ]
})
export class SharedModule { }
