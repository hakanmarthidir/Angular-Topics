import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { of } from 'rxjs';
import { IProduct } from '../models/IProduct';

describe('Product Service HttpTestingController', () => {
    let injector: TestBed;
    let service: ProductService;
    let httpMock: HttpTestingController;
    let mockProducts: IProduct[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ProductService]
        });

        mockProducts = [
            { productId: 1, productName: 'xbox', productCount: 23 },
            { productId: 2, productName: 'ps4', productCount: 50 },
            { productId: 3, productName: 'wii', productCount: 40 },
        ];

        injector = getTestBed();
        service = injector.get(ProductService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    describe('GetProducts', () => {
        it('should return3 items', () => {

            service.getProducts().subscribe(products => {
                expect(products.length).toBe(3);
                expect(products[0].productName).toEqual('xbox');
            });

            const req = httpMock.expectOne('/assets/mock-product.json');
            expect(req.request.method).toBe('GET');
            req.flush(mockProducts);
        });

        // VEYA beforeEachteki inject kullanilmaz ise it baslangicinda da nesneler verilebilir.

        it('should return3 items - with inject', inject([ProductService, HttpTestingController],
            (httpservice: ProductService, backend: HttpTestingController) => {

                httpservice.getProducts().subscribe(products => {
                    expect(products.length).toBe(3);
                    expect(products[0].productName).toEqual('xbox');
                });

                const req = backend.expectOne('/assets/mock-product.json');
                expect(req.request.method).toBe('GET');
                req.flush(mockProducts);
            }));

    });
});
