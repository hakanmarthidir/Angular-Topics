import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-childchange',
  templateUrl: './childchange.component.html',
  styleUrls: ['./childchange.component.css']
})
export class ChildchangeComponent implements OnInit, OnChanges {

  //Parenttan bekledigimiz deger
  @Input() no: number;

  //ngOnChanges ile no degiskenin onceki degerini ve guncel degerini, ilk kez mi degisiyor gibi bilgileri alabiliriz.
  //aldigimiz bilgileri loglamak icin string bir array tanimladik.
  loglist: Array<string> = new Array<string>();

  constructor() { }

  ngOnInit() {}

  //NgOnChanges Angularin LifeCycle Hooklarindan bir tanesidir.
  //Bu ornekte Parent componenttan Child componenta "no" isimli sayisal ifadeyi yolladik.
  //Child bu ifade ile ugrasirken/kullanirken Parent Component bu degiskenin veya objectnin uzerinde degisiklik yapabilir.
  //Bu durumda reference deger degisecegi icin Child Component uzerindeki ngOnChanges tetiklenecektir. 
  //reference : Angular IO -> https://angular.io/guide/component-interaction

  //Yapilan degisime gore farkli bir http service e gidip bilgileri guncelleyebilir ve sayfanin degisen veriye gore guncellenmesini saglayabilirsiniz.


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {

    if (typeof changes['no'] !== "undefined") {

      let childNo = changes["no"];
      let to = JSON.stringify(childNo.currentValue);

      if (childNo.isFirstChange()) {
             this.loglist.push(`Initial value of "no" set to ${to}`);
           } else {
            let from = JSON.stringify(childNo.previousValue);
            this.loglist.push(` "no" changed from ${from} to ${to}`);
         }

      // Birden fazla propertyniz varsa asagidaki sekilde propertyler arasinda ilerleyebilirsiniz. 

      // for (let propName in changes) {
      //   let changedProp = changes[propName];
      //   let to = JSON.stringify(changedProp.currentValue);
      //   if (changedProp.isFirstChange()) {
      //     this.loglist.push(`Initial value of ${propName} set to ${to}`);
      //   } else {
      //     let from = JSON.stringify(changedProp.previousValue);
      //     this.loglist.push(`${propName} changed from ${from} to ${to}`);
      //   }
      // }
    }

  }
}
