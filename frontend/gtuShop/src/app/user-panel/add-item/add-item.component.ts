import { Component, OnInit } from '@angular/core';

//Svg
import { faList } from '@fortawesome/free-solid-svg-icons';

//Svg


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})


export class AddItemComponent implements OnInit {

  faList = faList;
  
  constructor() { }

  ngOnInit() {
  }

}
