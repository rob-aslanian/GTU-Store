import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/service/store.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.scss']
})
export class BestSellersComponent implements OnInit {

  $bestSellers: Observable<any> ;

  constructor(
     private storeService: StoreService
  ) { }

  ngOnInit() {
    this.$bestSellers = this.storeService
                        .getTodayItems().pipe(
                           map( ({ data }) => data)
                        )
  }

}
