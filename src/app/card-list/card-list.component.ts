import { Component, OnInit } from '@angular/core';
import { CardMTG } from '../utils/cardMTG';
import { CardService } from '../services/card.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  editIcon = faEdit;
  cards: CardMTG[] = [];
  name='';

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

  searchByText(): void {
    this.cardService.searchByText(this.name).subscribe(
      (products) => {
        this.cards = products;
        console.log(products);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
