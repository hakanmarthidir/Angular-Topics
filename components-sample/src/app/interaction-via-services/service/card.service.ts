import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CardService {

    private cardGivingSource = new Subject<string>();
    cardGiving$ = this.cardGivingSource.asObservable();

    giveCard(card: string) {
        this.cardGivingSource.next(card);
    }
}
