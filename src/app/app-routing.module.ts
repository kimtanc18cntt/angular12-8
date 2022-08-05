import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from './component/product/product.component'
import {PagenotcomponentComponent} from './component/pagenotcomponent/pagenotcomponent.component'
import {CartComponent} from './component/cart/cart.component';
import {HomeComponent} from './component/home/home.component'
import {RegisterComponent} from './component/register/register.component'
import {DialogComponent} from './component/dialog/dialog.component';
import {CoinListComponent} from './component/coin-list/coin-list.component'

const routes: Routes = [ 
{ path: 'home', component:  CoinListComponent},
{ path: 'products', component: ProductComponent },
{ path: 'cart', component: CartComponent },
{ path: 'addd', component: ProductComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'dialog', component: DialogComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', component: PagenotcomponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
