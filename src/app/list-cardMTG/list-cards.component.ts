import { Component, OnInit } from '@angular/core';
import {ListCardsMTGService} from "../service/list-cardMTG.service";
import { CardMTG } from '../model/cardMTG';
import {mergeMap} from "rxjs";
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss']
})
export class ListCardMTGComponent implements OnInit {
  shieldIcon = faShieldAlt;
  cards: CardMTG[] = [];

  constructor( private readonly listCardsService: ListCardsMTGService) {
    //Rien à faire ici
  }

  ngOnInit(): void {
    this.listCardsService.fetch().subscribe(cards => {
      this.cards = cards || [];
    });
  }

  delete(card: CardMTG) {
    this.listCardsService.delete(card.id!).subscribe(cards => {
      this.cards = cards;
    });
  }

  add(card: CardMTG) {
    this.listCardsService
      .create(card)
      .pipe(mergeMap(() => this.listCardsService.fetch()))
      .subscribe(cards => {
        this.cards = cards;
      });
  }

  update(card: CardMTG) {
    this.listCardsService
      .update(card)
      .pipe(mergeMap(() => this.listCardsService.fetch()))
      .subscribe(cards => {
        this.cards = cards;
      });
  }

}
