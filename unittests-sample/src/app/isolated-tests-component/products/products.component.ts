import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/http-services/product.service';
import { ActivatedRoute } from '@angular/router';
import { TestBed } from '@angular/core/testing';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[];

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.route.snapshot.data['products'];
  }
}
