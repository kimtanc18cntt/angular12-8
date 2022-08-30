import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

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
        label: 'Products',
        icon: 'pi pi-fw pi-dollar',
        url: '/product'
      }

    ];
  }

}
