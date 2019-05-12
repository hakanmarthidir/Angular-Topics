import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductService } from '../http-services/product.service';

@Injectable()
export class ProductResolver implements Resolve<any>
{

    constructor(private productService: ProductService){}

    resolve(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot){
        return this.productService.getProducts();
    }
}
