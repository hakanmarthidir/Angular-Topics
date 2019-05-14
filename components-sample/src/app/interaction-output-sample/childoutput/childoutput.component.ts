import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-childoutput',
  templateUrl: './childoutput.component.html',
  styleUrls: ['./childoutput.component.css']
})
export class ChildoutputComponent implements OnInit {

  @Input() productId: number;
  @Output() buyed = new EventEmitter<any>();
  //@Output() unbuyed = new EventEmitter<any>();
  
  buy() {
    //if(this.productId){
    this.buyed.emit(this.productId);
    //Other Operations...Call Service or anything else...
    // }
    // else{
    //   this.unbuyed.emit(this.productId);
    // }
  }

  constructor() { }

  ngOnInit() {
  }

}
