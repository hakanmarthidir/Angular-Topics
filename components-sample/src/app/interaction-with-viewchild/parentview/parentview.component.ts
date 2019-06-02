import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildviewComponent } from '../childview/childview.component';

@Component({
  selector: 'app-parentview',
  templateUrl: './parentview.component.html',
  styleUrls: ['./parentview.component.css']
})
export class ParentviewComponent implements AfterViewInit, OnInit {

  localVariable = 'first value';

  @ViewChild(ChildviewComponent)
  private childviewComponent: ChildviewComponent;

  constructor() { }

  getMessageFromChild(text: string) {
    let output = this.childviewComponent.write(text);
    this.localVariable = output;
    console.log(text);
  }



  //viewin baslamasi tamamlandiktan sonra burasi calisir. OnInit bu eventten once tetiklenir.
  ngAfterViewInit(): void {
    console.log(this.childviewComponent.write('2-AfterViewInit situation'));
    console.log(this.childviewComponent.write('3- sample text via afterviewinit'));
  }

  ngOnInit(): void {
    console.log(this.childviewComponent.write('1-NgOnInit situation'));
  }


}

//NOTE : 
//local variable teknigini asagidaki durumlarda kullanmazsiniz bu nedenle viewchild modeline gecis yapmalisiniz
// eger parent component classinin bir ornegi child componente ait degerleri okumali ve yazmali ise, 
// eger parent component classinin bir ornegi child componente ait methodlari cagirmali ise... 

// parent componentin bu tip bir erisime ihtiyaci varsa, child componenti parent icerisine ViewChild olarak Inject etmelisiniz. 

//local variable orneginde hatirlanacagi uzere inject yoktu.. kolay bir kullanimdi
// <button (click)= "local.write('Angular Message')">Call WriteConsole Method From Child</button>
// <br>
// <app-childlocal #local></app-childlocal>

//bir parent uzerinde birden fazla child component kullanilabilir ve bunlarin hepsini parent uzerinden yonetmek, coordine etmemiz gereken durumlar olabilir.
