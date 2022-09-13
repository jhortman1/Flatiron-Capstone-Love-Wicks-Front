import { CandleShopComponent } from './candle-shop/candle-shop.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandleComponent } from './admin/candle/candle.component';
import { UserComponentComponent } from './admin/users/user-component/user-component.component';

const routes: Routes = [
  { path: 'admin/users', component: UserComponentComponent },
  { path: 'admin/candles', component: CandleComponent },
  { path: 'shop', component: CandleShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
