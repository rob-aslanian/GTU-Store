import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { AuthorizationService } from './services/authorization.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CatPipe } from './pipes/cat.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';

const components = [

      FooterComponent,
      CatPipe,
      SpinnerComponent
      
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule
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
