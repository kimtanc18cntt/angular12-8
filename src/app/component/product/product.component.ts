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
  constructor(private api : ApiService, 
    private cartService : CartService,
    private messageService: MessageService) { 
    }

  ngOnInit(): void {
    this.isLoading = true
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
        this.isLoading = false
      });
      console.log(this.productList)
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
    this.messageService.add({severity:'success', summary: 'Success', detail: 'successful manipulation'});
    
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
  

}