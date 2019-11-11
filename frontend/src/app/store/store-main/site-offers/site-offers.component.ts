import { Component, OnInit } from '@angular/core';

//Svg
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
//Svg

@Component({
  selector: 'app-site-offers',
  templateUrl: './site-offers.component.html',
  styleUrls: ['./site-offers.component.scss']
})
export class SiteOffersComponent implements OnInit {

  plane = faPaperPlane;
  faGlobeAmericas = faGlobeAmericas;
  faThumbsUp = faThumbsUp;


  constructor() { }

  ngOnInit() {
  }

}
