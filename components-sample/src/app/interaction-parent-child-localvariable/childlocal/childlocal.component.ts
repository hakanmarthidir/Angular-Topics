import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childlocal',
  templateUrl: './childlocal.component.html',
  styleUrls: ['./childlocal.component.css']
})
export class ChildlocalComponent implements OnInit {

  constructor() { }

  givenMessage: string;

  ngOnInit() {
  }

  write(message: string) {
    this.givenMessage = message;
  }

}
