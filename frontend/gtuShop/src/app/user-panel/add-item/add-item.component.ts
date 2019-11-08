import { Component, OnInit } from '@angular/core';

//Svg
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ICategories } from 'src/app/shared/models/categories.model';
import { StoreService } from 'src/app/store/service/store.service';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { IProduct } from 'src/app/shared/models/product.model';

//Svg


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})


export class AddItemComponent implements OnInit {

  $categories: Observable<ICategories>;

  faList = faList;
  productsForm: FormGroup;
  submitted: boolean = false;
  images: any[] = [];

  constructor(
    private storeService: StoreService,
    private fb: FormBuilder,
    private domSanitize: DomSanitizer
  ) {

   this.productsForm = this.fb.group({
                  title: ['', Validators.required],
                  description:[''],
                  price:['', Validators.required],
                  category_id:['', Validators.required]		
                })
   }

  // Get Products ctrls

  get proCtrls() {
       return this.productsForm.controls;
  }

  ngOnInit() {

    this.$categories =  this.storeService.getCategories()
    .pipe( map( ({ data }) => data ) );

  }

  addProducts() {
     this.submitted = true;
     if(!this.productsForm.valid) {
         return;
     }
  
    const { title, description, price, category_id } = this.productsForm.controls;

    let input: IProduct = {
      title: title.value,
      description: description.value,
      price: price.value,
      category_id: category_id.value,
      images: this.images.map( image => image.BLOB )
    };

   const data = this.transformInputToFormData( input );
   
   this.storeService.addProducts(data).subscribe( data => console.log( data ) );
   
       
  }

  uploadFiles(e: any) {
     const target = e.target.files[0];
     
    // Validate if uploaded files is image 
    if( target && !target.type.startsWith('image')) {
       return;
    }
    
     // Get directionary of file
     const path =  URL.createObjectURL( target );
     
    // Security
     const fileForView = this.domSanitize.bypassSecurityTrustResourceUrl(path);

  
     this.images.push({
        BLOB: target,
        fileForView: fileForView
    })
   
  }
  removeImage(idx: number) {
    this.images.splice(idx, 1); 
  }

  transformInputToFormData( input: any ) {
    const formData: FormData = new FormData();

    Object.keys(input).map( key => {
       formData.append( key, input[key])
    } )
    return formData;
  }
}
