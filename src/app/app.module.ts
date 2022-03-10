import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCardMTGComponent } from './list-cardMTG/list-cards.component';
import {MatListModule} from "@angular/material/list";
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import 'bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    ListCardMTGComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
