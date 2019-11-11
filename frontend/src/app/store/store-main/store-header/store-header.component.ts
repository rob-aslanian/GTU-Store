import { Component, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-store-header',
  templateUrl: './store-header.component.html',
  styleUrls: ['./store-header.component.scss']
})
export class StoreHeaderComponent implements OnInit {
  faPhone = faPhone;
  constructor() { }

  ngOnInit() {
  }

}
