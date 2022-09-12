import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandleComponent } from './admin/candle/candle.component';
import { UserComponentComponent } from './admin/user-component/user-component.component';

const routes: Routes = [
  { path: 'admin/users', component: UserComponentComponent },
  { path: 'admin/candles', component: CandleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
