import { Component, OnInit } from '@angular/core';
import { CardMTG } from '../model/cardMTG';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { ListCardsMTGService } from '../partage/service/list-cardMTG.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  circleIcon = faCircle;

  card: CardMTG = {};


  constructor(private readonly listCardsMTGService:ListCardsMTGService) {
    //RAS
  }


}
