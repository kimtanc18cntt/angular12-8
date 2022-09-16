
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';

import { DataApiService } from 'src/app/service/data-api.service';
import { CurrencyService } from 'src/app/service/currency.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {
  isLoading = false;
  bannerData = [];
  currency = 'USD';
  dataSource!: any;
  ProductTemp!: Product[];
  Products!: Product[];
  searchInput: string;

  constructor(private api: DataApiService,
    private router: Router,
    private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.getAllData();
    this.getBannerData();
    this.currencyService.getCurrency()
      .subscribe(val => {
        this.isLoading = true;
        setTimeout(() => {
          this.currency = val;
          this.getAllData();
          this.getBannerData();
          this.isLoading = false;
        }, 8000);
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
      .subscribe(res =>
        {
          this.isLoading = true;
          setTimeout(() => {
            console.log(res);
            this.dataSource = res
            console.log('ádasdasd'+this.dataSource)
            this.isLoading = false;
          }, 3000);
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  gotoDetails(row: Product) {
    console.log(row);
    this.router.navigate(['coin-detail', row.id])
  }

  handleSearchChange() {
    let newUsers = this.dataSource.filter(Products => Products.name?.toLowerCase().includes(this.searchInput.toLowerCase()));
    this.dataSource = newUsers;
    console.log('âsdasdasd'+this.dataSource)
  }
}
