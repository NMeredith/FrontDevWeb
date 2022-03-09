import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCardsComponent } from './list-cards/list-cards.component';
import {MatListModule} from "@angular/material/list";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ListCardsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
