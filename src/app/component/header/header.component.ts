import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import {MenuItem} from 'primeng/api';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CartService } from 'src/app/service/cart.service';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedproducts: string[];
  filteredproducts: string[];
  items: MenuItem[];
  image='https://www.kindpng.com/picc/m/361-3612116_social-angular-outline-angular-logo-black-hd-png.png';
  items2: MenuItem[];

  scrollableItems: MenuItem[];

  activeItem: MenuItem;

  activeItem2: MenuItem;
  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(
    private dialog : MatDialog, private cartService : CartService
  ){}
  ngOnInit(): void {
   
  this.items2 = [
    {label: 'Home', icon: 'pi pi-fw pi-home', url:'/home'},
    {label: 'Product', icon: 'pi pi-fw pi-bookmark-fill', url:'/products'},
    {label: 'Register', icon: 'pi pi-fw pi-file', url:'/register'},
];

    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
})
  
  }
  
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
       
      }
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
