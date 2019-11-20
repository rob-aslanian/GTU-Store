import { Component, OnInit } from '@angular/core';

//Svg
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Observable, of, forkJoin } from 'rxjs';
import { ICategories } from 'src/app/shared/models/categories.model';
import { StoreService } from 'src/app/store/service/store.service';
import { map, switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { IProduct, IProductDetailed } from 'src/app/shared/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PanelService } from '../service/panel.service';

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
  editId: any;
  imagesDeleteId: any[] = [];


  constructor(

    private storeService: StoreService,
    private fb: FormBuilder,
    private domSanitize: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private panelService: PanelService,
    private route: Router

  ) {

   this.productsForm = this.fb.group({

                  title: ['', Validators.required],
                  description:[''],
                  price:['', Validators.required],
                  category_id:['', Validators.required]		

                })
     this.editId =   this.activatedRoute.snapshot.params['id'];
   }

  // Get Products ctrls

  get proCtrls() {
       return this.productsForm.controls;
  }

  ngOnInit() {

    this.$categories =  this.storeService.getCategories()
    .pipe( map( ({ data }) => data ) );

   // Case edit    
    if( this.editId ) {
        this.storeService.getProduct(
          this.editId
        ).subscribe( ({
          data
        }) => {
            if( data ) {
                 this.parseData( data );
            }  
        } )
    }
    
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
          images: this.images.map( image => image.BLOB ).filter( image => image )
    };

   const data = this.transformInputToFormData( input );
   
   // Case add
   if( !this.editId ) {
        this.panelService
        .addProducts(data)
        .subscribe( ({ data }) => {

            this.panelService.addProduct.next(
              {
                title: title.value,
                description: description.value,
                price: price.value,
                category_id: category_id.value,
                images: this.images.map(
                  item => {
                      return {
                          image: {
                            url : item.fileForView
                          }
                      }
                  }
                ),
                id: data.id,
                isSelect: false  
              }
            )
            this.clearAddProduct();
        });
   }

   // Edit
   else if( this.editId ) {
       this.panelService
       .updateProduct(
         data,
         this.editId
       )
       .pipe(
         switchMap(
           () => {
             if( this.imagesDeleteId.length > 0 ) {
                return this.deleteImagesFromDb();
             }
             return of(false);
           }
         )
       )
       .subscribe( data  => {
              this.route.navigate(['panel', 'add-item']);
       })
   }
   
       
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
    if( this.images[idx]['id'] ) {
          this.imagesDeleteId.push( this.images[idx]['id']  ) ;
          
    }
    this.images.splice(idx, 1); 
  }

  transformInputToFormData( input: any ) {
      const formData: FormData = new FormData();

      Object.keys(input).map( key => {
        if( key === 'images' ) {
           if(input[key].length > 0){

             input[key].map( item => {
                formData.append('images[]', item)
             } )
           }
        } else {
          formData.append( key, input[key])
        }
      } )
      return formData;
  };

  parseData( data: IProductDetailed ) {
    
      this.productsForm.patchValue({
              title: data.title  ,
              description: data.description , 
              price: data.price ,
              category_id: data.category_id ,
      })
      if( data.images.length > 0 ) {
           data.images.map(
             image => {
                 this.images.push(
                   {
                     fileForView: image.image.url,
                     id: image.id
                   }
                 )
             }
           )
      }
  }

  deleteImagesFromDb(): Observable<any> {
      return forkJoin(
        this.imagesDeleteId.map(
          id => this.panelService.deleteImage( id )
        )
      )
  }

  clearAddProduct(): void {
      this.productsForm.reset();
      this.productsForm.get('category_id').setValue('');
      this.submitted = false;
      this.images = [];
      this.imagesDeleteId = [];
  }
}
