import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {Card} from "../model/Card";


@Injectable({
  providedIn: 'root'
})
export class ListCardsService {

  private cards = new BehaviorSubject<string>('');

  private urlServer:any = {};

  constructor(private readonly http: HttpClient) {

    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls

    Object.keys(environment.backend.endpoints).forEach(
      // @ts-ignore
      k => (this.urlServer[k] = `${baseUrl}${environment.backend.endpoints[k]}`)
    );
    console.log(this.urlServer);

  }

  get cards$(): Observable<string> {
    return this.cards.asObservable();
  }

  updatedCardList(data: string){
    this.cards.next(data);
  }

  fetch(): Observable<Card[]> {
    return this.http.get<Card[]>(this.urlServer.allCards);
  }

  search(name: string): Observable<Card[]> {
    return this.http.get<Card[]>(this.urlServer.filterByName.replace(':name', name));
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.urlServer.unEmploye.replace(':id', id));
  }

  create(card: Card): Observable<Card> {
    return this.http.post<Card>(this.urlServer.allCards, card);
  }

  fetchOne(id: number): Observable<Card> {
    return this.http.get<Card>(this.urlServer.oneCard.replace(':id', id));
  }

  update(card: Card): Observable<Card> {
    return this.http.put<Card>(this.urlServer.oneCard.replace(':id', card.id), card);
  }
}
