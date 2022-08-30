import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagenotcomponentComponent} from './component/pagenotcomponent/pagenotcomponent.component'
import {RegisterComponent} from './component/register/register.component'
import {CoinListComponent} from './component/coin-list/coin-list.component';
import {CoinDetailComponent} from './component/coin-detail/coin-detail.component';
import {ProductComponent} from './component/product/product.component';

const routes: Routes = [ 
{ path: 'home', component:  CoinListComponent},
{ path: 'register', component: RegisterComponent },
{ path: 'product', component: ProductComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path:'coin-detail/:id', component: CoinDetailComponent},
{ path: '**', component: PagenotcomponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
