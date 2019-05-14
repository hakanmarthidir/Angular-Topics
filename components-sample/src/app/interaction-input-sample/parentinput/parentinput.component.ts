import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-parent',
  templateUrl: './parentinput.component.html',
  styleUrls: ['./parentinput.component.css']
})
export class ParentinputComponent implements OnInit {

  productdetails: IProduct[] = [
    { productId: 1, productName: "p1" },
    { productId: 2, productName: "p2" },
    { productId: 3, productName: "p3" },
  ];

  productdetailTitle = 'Angular Products';
  productcompany = 'Amazon';

  constructor() { }

  ngOnInit() {

  }
}
