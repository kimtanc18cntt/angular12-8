import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Product } from 'src/app/product';

import { DataApiService } from 'src/app/service/data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [MessageService],
})
export class ProductComponent implements OnInit {
  products: Product[];
  productsTemp!: Product[];
  bannerData = [];
  sortOptions: SelectItem[];
  currency = 'USD';
  dataSource!: any;
  sortOrder: number;
  sortField: string;
  searchInput: string;
  isLoading = false;

  constructor(private productService: DataApiService, private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
    console.log(1)
    this.productService.getCurrency(this.currency).subscribe((res) => {
      console.log(2);
      this.products = this.productsTemp = res;
      console.log('data:2' + this.dataSource);
      this.isLoading = false;
    });

    console.log(3);
  }

  gotoDetails(row: Product) {
    console.log(row);
    this.router.navigate(['coin-detail', row.id]);
  }

  handleSearchChange() {
    let newUsers = this.productsTemp.filter((products) =>
      products.name?.toLowerCase().includes(this.searchInput.toLowerCase())
    );
    this.products = newUsers;
    console.log('data search:' + this.products);
  }
}
