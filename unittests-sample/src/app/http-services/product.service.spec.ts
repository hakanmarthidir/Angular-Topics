import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { IProduct } from '../models/IProduct';

describe('Http Service Test', () => {

    let productService: ProductService;
    let mockHttpClient;
    let mockProducts: Observable<IProduct[]>;

    beforeEach(() => {

        mockProducts = of([
            { productId: 1, productName: 'xbox', productCount: 23 },
            { productId: 2, productName: 'ps4', productCount: 50 },
            { productId: 3, productName: 'wii', productCount: 40 },
        ]);

        mockHttpClient = jasmine.createSpyObj(['get']);
        productService = new ProductService(mockHttpClient);
    });

    it('should have 3 items', () => {

        mockHttpClient.get.and.returnValue(mockProducts);
        productService.getProducts().subscribe((result) => { expect(result.length).toBe(3); });

    });

    it('shoul have been called', () => {

        mockHttpClient.get.and.returnValue(mockProducts);
        productService.getProducts();
        expect(mockHttpClient.get).toHaveBeenCalled();
    });


});
