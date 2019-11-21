import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from '../service/store.service';

@Injectable({ providedIn: 'root' })


export class productResolver implements Resolve<any> {
  constructor(
        private storeService: StoreService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
   const categoryId = route.params['category'];

   
   return  this.storeService.getProducts(categoryId);
  }
}
