import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardMTG } from 'src/app/utils/cardMTG';

const baseURL = 'http://127.0.0.1:8080/CarteMagic';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private httpClient: HttpClient) {}
  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }
  read(id :number): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }
  create(data : CardMTG): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }
  update(id : number,data: CardMTG): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }
  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  // CORRIGER LA REQUETE
  searchByName(name: string): Observable<any> {
    return this.httpClient.get(`${baseURL}/name/${name}`);
    }

}
