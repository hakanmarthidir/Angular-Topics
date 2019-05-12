import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './isolated-tests-component/products/products.component';
import { ProductService } from './http-services/product.service';
import { ProductResolver } from './resolvers/product-resolver.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService, ProductResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
