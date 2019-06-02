import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childview',
  templateUrl: './childview.component.html',
  styleUrls: ['./childview.component.css']
})
export class ChildviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  write(message:string) {
    return 'child component says : ' + message;
  }

}
