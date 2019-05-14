import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-child',
  templateUrl: './childinput.component.html',
  styleUrls: ['./childinput.component.css']
})
export class ChildinputComponent implements OnInit {

// Ana componentten Child componente gelecek olan datalar icin INPUT kullanilir. 
// Input icerisindeki tanimlamayi doldurursaniz o adla cagiracaginizi unutmayin, doldurmazsaniz property adi ile gonderebilirsiniz.
@Input() products: IProduct[];
@Input('title') titleText: string;

constructor() { }

ngOnInit() {
}

tracker(index, item) {
    return index;
}

}
