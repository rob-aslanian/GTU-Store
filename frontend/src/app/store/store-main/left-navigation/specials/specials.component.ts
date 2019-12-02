import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/service/store.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent implements OnInit {

  $topProducts: Observable<any> ;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit() {
     this.$topProducts  =  this.storeService
                              .getTopProducts().pipe(
                                  map(({ data }) => data ) 
                                );
  }

}
