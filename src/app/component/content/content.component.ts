import { formatDate } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { CartService } from 'src/app/service/cart.service';
import {CartComponent} from '../cart/cart.component'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input('item') public item;
  items: MenuItem[];

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home page',
        url: '/home'
    },
    {
      label: 'Menber',
      url: '/cart'
      
    },
      {
          label: 'product',
          url: '/products',
          
      },
      {
          label: 'Cart',
          
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Cart', icon: 'pi pi-fw pi-trash', url:'/cart'} ,
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh', url:'emptycart()'}
          ]
      },
      {
        label: 'contact',
        
      }
  ];
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
}
