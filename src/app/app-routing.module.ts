import { AuthGuard } from './../guards/auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { CandleShopComponent } from './candle-shop/candle-shop.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandleComponent } from './admin/candle/candle.component';
import { UserComponentComponent } from './admin/users/user-component/user-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { OrderComponent } from './admin/orders/order/order.component';

const routes: Routes = [
  { path: '', component: LoginComponentComponent},
  { path: 'admin/users',canActivate: [AuthGuard],data:{roles:['ROLE_ADMIN']}, component: UserComponentComponent },
  { path: 'admin/candles',canActivate: [AuthGuard],data:{roles:['ROLE_ADMIN']}, component: CandleComponent },
  { path: 'admin/orders',canActivate: [AuthGuard],data:{roles:['ROLE_ADMIN']},component: OrderComponent},
  { path: 'shop',component: CandleShopComponent},
  { path: 'about',component: AboutComponent},
  { path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
