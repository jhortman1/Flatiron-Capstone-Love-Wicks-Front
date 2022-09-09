import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponentComponent } from './admin/user-component/user-component.component';

const routes: Routes = [
  { path: 'admin/users', component: UserComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
