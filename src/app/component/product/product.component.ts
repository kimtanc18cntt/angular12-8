import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/product';
import { CartService } from '../../service/cart.service';

import { DataApiService } from 'src/app/service/data-api.service';
import { CurrencyService } from 'src/app/service/currency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService]
})

export class ProductComponent implements OnInit {

  isLoading = false;
  public productList: any;
  public filterCategory: any
  searchKey: string = "";
  bannerData = [];
  currency = 'USD';
  dataSource!: any;
  users: any;
  p: number = 1;
  total: number = 0;
    searchInput: string;

  constructor(private api: DataApiService,
    private router: Router,
    private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getUsers();
    this.getAllData();
    this.getBannerData();
    this.currencyService.getCurrency()
      .subscribe(val => {
        this.currency = val;
        this.getAllData();
        this.getBannerData();
        this.isLoading = false;
      })
  }
  getBannerData() {
    this.api.getTrendingCurrency(this.currency)
      .subscribe(res => {
        this.bannerData = res;
      })
  }

  getAllData() {
    this.api.getCurrency(this.currency)
      .subscribe(res => {
        console.log(res);
        this.dataSource = res
        console.log('ádasdasd' + this.dataSource)
        this.isLoading = false;
      })
  }

  gotoDetails(row: Product) {
    console.log(row);
    this.router.navigate(['coin-detail', row.id])
  }

  getUsers() {
    this.api.getUsers(this.p)
      .subscribe((response: any) => {
        this.users = response.data;
        this.total = response.total;
      });
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getUsers();
  }
}