import { Component, OnInit } from '@angular/core';
import {ListCardsService} from "../service/list-cards.service";
import { Card } from '../model/Card';
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardsComponent implements OnInit {

  cards: Card[] = [];

  constructor( private readonly listCardsService: ListCardsService) {
    //Rien à faire ici
  }

  ngOnInit(): void {
    this.listCardsService.fetch().subscribe(cards => {
      this.cards = cards || [];
    });
  }

  delete(card: Card) {
    this.listCardsService.delete(card.id!).subscribe(cards => {
      this.cards = cards;
    });
  }

  add(card: Card) {
    this.listCardsService
      .create(card)
      .pipe(mergeMap(() => this.listCardsService.fetch()))
      .subscribe(cards => {
        this.cards = cards;
      });
  }

  update(card: Card) {
    this.listCardsService
      .update(card)
      .pipe(mergeMap(() => this.listCardsService.fetch()))
      .subscribe(cards => {
        this.cards = cards;
      });
  }

}
