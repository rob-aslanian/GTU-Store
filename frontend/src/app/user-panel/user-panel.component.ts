import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


//Svg
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
//Svg
@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})



export class UserPanelComponent implements OnInit {
  faPlusSquare = faPlusSquare;
  faTrash = faTrash;
  
  constructor(
    public router: Router
  ) { }

  ngOnInit() {

  }
}
