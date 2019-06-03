import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-childservice',
  templateUrl: './childservice.component.html',
  styleUrls: ['./childservice.component.css']
})
export class ChildserviceComponent implements OnDestroy {

  @Input() player: string;
  card = 'there is no card';
  subscription: Subscription;

  constructor(private cardService: CardService) {

    this.subscription = this.cardService.cardGiving$.subscribe(card => {
      this.card = card;
      console.log(this.player + ' ' + this.card);
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
