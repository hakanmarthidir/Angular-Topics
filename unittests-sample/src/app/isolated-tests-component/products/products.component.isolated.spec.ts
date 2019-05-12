import { ProductsComponent } from './products.component';
import { ProductService } from 'src/app/http-services/product.service';
import { IProduct } from 'src/app/models/IProduct';
import { ActivatedRoute, ActivatedRouteSnapshot, UrlSegment, Params, Data, Route } from '@angular/router';
import { of, Observable } from 'rxjs';
import { Type } from '@angular/core';

describe('ProductsComponent Isolated', () => {

    let component: ProductsComponent;
    let mockProductService;
    let mockProducts: IProduct[];
    let mockActivatedRoute;

    beforeEach(() => {

        mockProductService = jasmine.createSpyObj(['getProducts']);

        mockActivatedRoute = {
            snapshot: {
                data: {
                    products : [
                        { productId: 1, productName: 'xbox', productCount: 23 },
                        { productId: 2, productName: 'ps4', productCount: 50 },
                        { productId: 3, productName: 'wii', productCount: 40 },
                    ]
                }
            }
        };

        component = new ProductsComponent(mockProductService, mockActivatedRoute);
    });

    it('should have 3 item in products', () => {
        //Arrange 
        //mockProductService.getProducts.and.returnValue(mockProducts);
        //Act 
        component.getProducts();
        //Assert
        //IF Observable Use This :  component.products.subscribe((result) => { expect(result.length).toBe(3);});
        expect(component.products.length).toEqual(3);
    });

    it('should be correct firstname of array', () => {
        //Arrange 
        mockProductService.getProducts.and.returnValue(mockProducts);
        //Act 
        component.getProducts();
        //Assert
        //IF Observable Use This :  component.products.subscribe((result) => { expect(result.length).toBe(3);});
        expect(component.products[0].productName).toEqual("xbox");
    });
});




