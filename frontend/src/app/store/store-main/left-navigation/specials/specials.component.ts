import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store/service/store.service';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent implements OnInit {

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit() {
    this.storeService.getAllUsers().subscribe( data => console.log( data )  )  
  }

}
