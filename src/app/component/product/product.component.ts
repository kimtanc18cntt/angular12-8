import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig, SelectItem } from 'primeng/api';
import { Product } from 'src/app/product';

import { DataApiService } from 'src/app/service/data-api.service';
import { CurrencyService } from 'src/app/service/currency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [MessageService]
})

export class ProductComponent implements OnInit {
  products: Product[];
  bannerData = [];
    sortOptions: SelectItem[];
    currency = 'USD';
    dataSource!: any;
    sortOrder: number;
    sortField: string;
    searchInput: string;
    isLoading = false;

    constructor(private productService: DataApiService,
      private router: Router, private primengConfig: PrimeNGConfig) { }

    ngOnInit() {

      this.productService.getCurrency(this.currency)

      .subscribe(res => {
        this.isLoading = true;
        console.log(res);
        setTimeout(() => {
          this.products  = res
          console.log('ádasdasd'+this.dataSource)
        this.isLoading = false;
        }, 3000);

      })
      this.isLoading = false;
        this.primengConfig.ripple = true;
        console.log(this.dataSource);
    }

    gotoDetails(row: Product) {
      console.log(row);
      this.router.navigate(['coin-detail', row.id])
    }

    handleSearchChange() {
      let newUsers = this.products.filter(products => products.name?.toLowerCase().includes(this.searchInput.toLowerCase()));
      this.products = newUsers;
      console.log('âsdasdasd'+this.products)
    }

}
