import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import {ApiService} from '../../service/api.service';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService]
})

export class ProductComponent implements OnInit {

  isLoading = false;
  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  
  constructor(private apiservice : ApiService, 
    private cartService : CartService,
    private messageService: MessageService) { 
    }

  ngOnInit(): void {
    this.isLoading = true
    this.apiservice.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        this.isLoading = false
      });
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
    this.cartService.displayMessage('Success', 'successful manipulation');
  }
  
}