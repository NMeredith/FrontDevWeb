import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {CardMTG} from "../model/cardMTG";


@Injectable({
  providedIn: 'root'
})
export class ListCardsMTGService {

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

  fetch(): Observable<CardMTG[]> {
    return this.http.get<CardMTG[]>(this.urlServer.allCards);
  }

  search(name: string): Observable<CardMTG[]> {
    return this.http.get<CardMTG[]>(this.urlServer.filterByName.replace(':name', name));
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.urlServer.unEmploye.replace(':id', id));
  }

  create(card: CardMTG): Observable<CardMTG> {
    return this.http.post<CardMTG>(this.urlServer.allCards, card);
  }

  fetchOne(id: number): Observable<CardMTG> {
    return this.http.get<CardMTG>(this.urlServer.oneCard.replace(':id', id));
  }

  update(card: CardMTG): Observable<CardMTG> {
    return this.http.put<CardMTG>(this.urlServer.oneCard.replace(':id', card.id), card);
  }
}
