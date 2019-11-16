import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../service/store.service';
import { IProductDetailed } from 'src/app/shared/models/product.model';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-store-item-detailed',
  templateUrl: './store-item-detailed.component.html',
  styleUrls: ['./store-item-detailed.component.scss']
})
export class StoreItemDetailedComponent implements OnInit, OnDestroy {

  $product: Observable<IProductDetailed>;
  $destroy: Subject<any> = new Subject<any>();

  constructor(
     private activatedRoute: ActivatedRoute,
     private store: StoreService
  ) { }

  ngOnInit() {

      this.activatedRoute.params.pipe( takeUntil( this.$destroy ) ).subscribe(
        ( { id } ) => {

                  this.$product =  this.store.getProduct( id ).pipe(map( ( data ) => data['data']))

              }
          )

  }
 ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
 }

}
