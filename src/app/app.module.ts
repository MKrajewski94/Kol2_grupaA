import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule }    from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component';
import { OrdersDetailComponent } from './orders-detail/orders-detail.component';
import { OrdersItemComponent } from './orders-item/orders-item.component';



@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrdersDetailComponent,
    OrdersItemComponent
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
