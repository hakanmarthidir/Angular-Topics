import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './isolated-tests-component/products/products.component';
import { ProductResolver } from './resolvers/product-resolver.service';

const routes: Routes = [
{path: 'products', component: ProductsComponent, resolve: {products: ProductResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
