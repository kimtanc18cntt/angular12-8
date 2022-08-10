import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from './component/product/product.component'
import {PagenotcomponentComponent} from './component/pagenotcomponent/pagenotcomponent.component'
import {CartComponent} from './component/cart/cart.component';
import {RegisterComponent} from './component/register/register.component'
import {CoinListComponent} from './component/coin-list/coin-list.component';
import {CoinDetailComponent} from './component/coin-detail/coin-detail.component';

const routes: Routes = [ 
{ path: 'home', component:  CoinListComponent},
{ path: 'products', component: ProductComponent },
{ path: 'cart', component: CartComponent },
{ path: 'addd', component: ProductComponent },
{ path: 'register', component: RegisterComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'coin-detail/:id', component: CoinDetailComponent},
{ path: '**', component: PagenotcomponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
