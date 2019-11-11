import { Component } from '@angular/core';
//@ts-ignore
import { environment } from '@environment'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  environment = environment;
}
