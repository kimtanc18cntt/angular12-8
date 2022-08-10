import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { CartService } from 'src/app/service/cart.service';
import { CurrencyService } from 'src/app/service/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedCurrency: string = "INR";
  bannerData = [];
  currency = 'USD';
  activeItem2: MenuItem;
  public totalItem: number = 0;
  
  constructor(
    private cartService: CartService,
    private currencyService: CurrencyService,
  ) { }
  ngOnInit(): void {

    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })

  }

  sendCurrency(event: string) {
    console.log(event);
    this.currencyService.setCurrency(event);
  }
}
