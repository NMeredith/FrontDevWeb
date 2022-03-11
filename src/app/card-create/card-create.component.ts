import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CardService } from '../services/card.service'
import { CardMTG } from '../utils/cardMTG';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss'],
})
export class CardCreateComponent implements OnInit {

  card = {
    name: '',
    manaCost:'',
    convertedManaCost: 0,
    colors:'',
    type: [],
    text:'',
    power:'',
    toughness:'',
    imageUrl:''
  }


  submitted = false;
  constructor(private cardService: CardService) {}
  ngOnInit(): void {}

  createCard(): void {
    const data = {
      name: this.card.name,
      text: this.card.text,
      imageUrl: this.card.imageUrl='https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=132565&type=card'
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
      manaCost:'',
      convertedManaCost: 0,
      colors:'',
      type: [],
      text:'',
      power:'',
      toughness:'',
      imageUrl:'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=132565&type=card'
    }
  }
}
