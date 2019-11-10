import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private activeRoute:ActivatedRoute  
  ) { }

  ngOnInit() {
    let token = this.activeRoute.snapshot.params['token'];

    console.log(token);
    
    localStorage.setItem('access_token' , token);
  }

}
