import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

productdetails: IProduct[] = [
  {productId:1, productName:"p1"},
  {productId:2, productName:"p2"},
  {productId:3, productName:"p3"},
];

productdetailTitle = 'Angular Products';
productcompany = 'Amazon';

  constructor() { }

  ngOnInit() {

  }
}
