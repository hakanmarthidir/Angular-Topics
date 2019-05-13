import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from '../models/IProduct';


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  productsLocal = '/assets/mock-product.json';

  // getProducts(): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>('/api/products')
  //     .pipe(catchError(this.handleError<IProduct[]>('getProducts', [])));
  // }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsLocal).pipe(catchError(this.handleError<IProduct[]>('getProducts', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}