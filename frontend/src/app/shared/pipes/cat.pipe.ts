import { Pipe, PipeTransform } from '@angular/core';
import { cat } from '../utils/categories';


@Pipe({
  name: 'cat'
})


export class CatPipe implements PipeTransform {
  cat = cat;
  transform(value: any, ...args: any[]): any {

     const catName = cat.filter( item => item.id ===  value.toString() );   
       
     return catName.length > 0 && catName[0].name ? catName[0].name : value ;
     
  }

}
