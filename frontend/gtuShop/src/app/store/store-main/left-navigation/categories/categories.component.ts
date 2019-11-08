import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/service/store.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ICategories } from 'src/app/shared/models/categories.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  $categories: Observable<ICategories>

  constructor(
     private storeService: StoreService
  ) { }

  ngOnInit() {

    this.$categories =  this.storeService.getCategories()
                                                        .pipe( map( ({ data }) => data ) );

  }

}
