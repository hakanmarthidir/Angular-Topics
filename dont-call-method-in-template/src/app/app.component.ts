import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'dont-call-method-in-template';
  name: string;

  // we called this method only once via template.
  // please check the browser console to see how many times this method called !!
  getdata1() {
    console.log('get data 1 called');
  }

  ngOnInit(): void {
    this.getdata2();
  }

  getdata2() {
    this.name = 'get data 2 called';
  }
}
