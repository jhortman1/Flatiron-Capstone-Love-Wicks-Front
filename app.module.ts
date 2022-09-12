import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { UserComponentComponent } from './admin/users/user-component/user-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { AdminMenuComponentComponent } from './admin-menu-component/admin-menu-component.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser-component/adduser.component';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { CandleComponent } from './admin/candle/candle.component';
import { AddCandleComponent } from './admin/candle/add-candle/add-candle.component';
import { ViewCandleComponent } from './admin/candle/view-candle/view-candle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    MenuComponentComponent,
    UserComponentComponent,
    AdminComponentComponent,
    AdminMenuComponentComponent,
    AdduserComponent,
    ViewuserComponent,
    CandleComponent,
    AddCandleComponent,
    ViewCandleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
