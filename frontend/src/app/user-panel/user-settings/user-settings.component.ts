import { Component, OnInit } from '@angular/core';
import { PanelService } from '../service/panel.service';
import { AuthorizationService } from '../../shared/services/authorization.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})

export class UserSettingsComponent implements OnInit {

  user_info: any = {};
  settingsForm: FormGroup ;
  submitted: boolean = false;

  constructor(

    private panelService: PanelService,
    private authService:  AuthorizationService,
    private domSanitazor: DomSanitizer,
    private fb: FormBuilder

  ) {
      this.settingsForm = this.fb.group({
          firstName: ['', Validators.compose([ Validators.maxLength( 10 ), Validators.minLength( 4 ) ])],
          lastName:  ['', Validators.compose([ Validators.maxLength( 10 ) , Validators.minLength( 4 ) ])],
          password:  ['', Validators.compose([ Validators.maxLength( 10 ) , Validators.minLength( 4 ) ])],
          
      })
   }

   get useCtrls() {
     return this.settingsForm.controls;
   }

  ngOnInit() {    
    
       this.panelService
       .getUserById( this.authService.getActiveUserId() )
         .subscribe( data => {
                this.user_info = data[0];
         } );

  }

  uploadImage( e: any ) {
     const image = e.target.files[0];
     
     const url =  URL.createObjectURL( image );

     const formData: FormData = new FormData();
  
    formData.append('avatar', image)
   
    this.panelService
     .saveUserUploadedImage( formData )
      .subscribe(
        () =>  this.user_info.avatar.url =  this.domSanitazor.bypassSecurityTrustResourceUrl(url)
      )
  }


  removeUserImage() {
      this.panelService
      .removeUserUploadedImage()
       .subscribe(
          () => this.user_info.avatar.url = ''
       )
  }

  editUser() {
     this.submitted = true;
     if( !this.settingsForm.valid ) {
        return ;
     }

    const formData: FormData = new FormData();

    Object.keys(this.settingsForm.controls).map(
      ( key ) => {

        let value = this.settingsForm.get(key).value;

        if( value ) {
           formData.append(key , value )
        } else {
          formData.append(key , undefined );
        }

      }
    )

    this.panelService
    .editUser(
      this.user_info.id,
      formData
    )
     .subscribe()

  }

}
