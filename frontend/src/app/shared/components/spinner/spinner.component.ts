import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template:  `<div class="spinner-wrapper"> 
                 <img src="assets/img/0.jpg" alt="micheail">   
              </div> `,
  styleUrls: ['./spinner.component.scss']
})

export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
