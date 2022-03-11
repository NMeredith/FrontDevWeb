import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { CardMTG } from '../utils/cardMTG';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  cards: CardMTG[] = [];

  constructor(private cardService: CardService) {}
  ngOnInit(): void {
    this.readCards();
  }

  readCards(): void {
    this.cardService.readAll().subscribe(
      (card) => {
        this.cards = card;
        console.log(card);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
