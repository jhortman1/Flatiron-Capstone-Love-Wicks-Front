import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { UserComponentComponent } from './admin/user-component/user-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { AdminMenuComponentComponent } from './admin-menu-component/admin-menu-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    MenuComponentComponent,
    UserComponentComponent,
    AdminComponentComponent,
    AdminMenuComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
