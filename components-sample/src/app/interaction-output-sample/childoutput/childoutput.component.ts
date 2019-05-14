import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-childoutput',
  templateUrl: './childoutput.component.html',
  styleUrls: ['./childoutput.component.css']
})
export class ChildoutputComponent implements OnInit {

  @Input() productId: number;
  @Output() buyed = new EventEmitter<any>();

  buy() {
    this.buyed.emit(this.productId);
    //Other Operations...Call Service or anything else...
  }

  constructor() { }

  ngOnInit() {
  }

}
