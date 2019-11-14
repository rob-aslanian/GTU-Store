import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {
  
  @Input() images: any;
  activatedImage: string ;
  index:          number = 0;
  source:         Observable<any> = interval(6000);
  $destroy:       Subject<any>  = new Subject<any>();

  constructor() { }

  ngOnInit() {
    if( this.images.length > 0 ) {
         this.activatedImage =  this.images[0]['image']['url'];
         this.source.subscribe( 
           () => {
                  // Check if items exits
              if( this.index < this.images.length -1 ) {
                  this.index++ ;
              } else {
                  // if not set to zero
                  this.index = 0;
              }
              this.activatedImage =  this.images[this.index]['image']['url']
           }
          )
     }
 
  }
  previusImage() {
    this.index--;
    this.activatedImage =  this.images[this.index]['image']['url'];
  };

  nextImage() {
    this.index++;
    this.activatedImage =  this.images[this.index]['image']['url'];
  };

  setImage( idx: number ) {    
    this.index = idx;
    this.activatedImage = this.images[this.index]['image']['url']
  };

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
