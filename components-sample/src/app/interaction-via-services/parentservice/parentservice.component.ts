import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-parentservice',
  templateUrl: './parentservice.component.html',
  styleUrls: ['./parentservice.component.css']
})
export class ParentserviceComponent implements OnInit {

  playerList = ['James', 'Michael', 'Kawhi'];
  cards = ['1', '2', '3'];
  random = 0;

  constructor(private cardService: CardService) {
  }

  ngOnInit() {
    this.random = Math.floor((Math.random() * 3) + 0);
  }

  giveCard() {
    const card = this.cards[this.random];
    this.cardService.giveCard(card);
  }

}

// NOTE : componentlar birbiri ile service uzerinden haberlesiyor.