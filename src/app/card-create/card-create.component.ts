import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service'
import { CardMTG } from '../utils/cardMTG';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss'],
})
export class CardCreateComponent implements OnInit {

  card = {
    name : '',
    text: '',
  }

  submitted = false;
  constructor(private cardService: CardService) {}
  ngOnInit(): void {}

  createCard(): void {
    const data = {
      name: this.card.name,
      text: this.card.text,
    };
    this.cardService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  newCard(): void {
    this.submitted = false;
    this.card = {
      name: '',
      text: '',
    };
  }
}
