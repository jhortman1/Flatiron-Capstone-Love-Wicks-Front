import { AuthServiceService } from './../auth-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {

  isAdmin:boolean; 

  constructor(private router:Router, private authService:AuthServiceService) { }

  ngOnInit(): void {
  
  }
  logout()
  {
    localStorage.removeItem('Love_Wicks_App')
  }
  
  goShop()
  {
    this.router.navigate(['shop']);
  }

}
