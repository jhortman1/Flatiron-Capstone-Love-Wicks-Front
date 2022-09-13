import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  goShop()
  {
    this.router.navigate(['shop']);
  }

}
