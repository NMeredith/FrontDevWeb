import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardMTG } from '../model/cardMTG';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  @Input() card: CardMTG | undefined;

  @Output('personDelete') delete$: EventEmitter<any> = new EventEmitter();

  @Output('personUpdate') update$: EventEmitter<any> = new EventEmitter();


  constructor() {
    //Empty
  }

  delete() {
    this.delete$.emit(this.card);
  }

  update() {
    this.update$.emit(this.card);
  }

}
