import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-parentchange',
  templateUrl: './parentchange.component.html',
  styleUrls: ['./parentchange.component.css']
})
export class ParentchangeComponent implements OnInit {

  p: number = 0;

  constructor() {
   }

  ngOnInit() {}

  update()
  {
    this.p += 1;
  }
}
