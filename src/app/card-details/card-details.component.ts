import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {

  message = '';
  currentCard: any = null;
  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    var stringToConvert = this.route.snapshot.paramMap.get('id');
    var numberValue = Number(stringToConvert);
    this.getCard(numberValue);
  }

  getCard(id: number): void {
    this.cardService.read(id).subscribe(
      (card) => {
        this.currentCard = card;
        console.log(card);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateCard(): void {
    this.cardService
      .update(this.currentCard.id, this.currentCard)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = 'The card was updated!';
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteCard(): void {
    this.cardService.delete(this.currentCard.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/cards']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}


