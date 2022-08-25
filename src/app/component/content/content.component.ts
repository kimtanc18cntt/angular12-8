import { Component, OnInit, Input,  } from '@angular/core';
import {MenuItem} from 'primeng/api';

import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  items: MenuItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home page',
        icon: 'pi pi-fw pi-home',
        url: '/home'
    },
    {
      label: 'Menber',
      icon: 'pi pi-fw pi-file',
      url: '/register'
    },
      {
          label: 'Product',
          icon: 'pi pi-fw pi-bookmark-fill',
          url: '/products'        
      },
  ];
  }
  

}
