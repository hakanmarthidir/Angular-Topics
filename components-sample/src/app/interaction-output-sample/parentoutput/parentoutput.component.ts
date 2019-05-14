import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-parentoutput',
  templateUrl: './parentoutput.component.html',
  styleUrls: ['./parentoutput.component.css']
})
export class ParentoutputComponent implements OnInit {

  products: IProduct[] = [
    { productId: 1, productName: 'p1' },
    { productId: 2, productName: 'p2' },
    { productId: 3, productName: 'p3' },
  ];

  constructor() { }

  ngOnInit() {
  }

  afterProductClicked(message: string) {
    console.log(message);
  }

  // afterUnBuyClicked(message: string) {
  //   console.log(message);
  // }

}
