import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCardMTGComponent } from './list-cards/list-cards.component';
import {MatListModule} from "@angular/material/list";
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import 'bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormulaireComponent } from './partage/formulaire/formulaire.component';
import {MatDialogModule} from "@angular/material/dialog";
import { EditComponent } from './edit/edit.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCardMTGComponent,
    HomeComponent,
    FormulaireComponent,
    EditComponent,
    ModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatDialogModule,
    NgbModule,
    FontAwesomeModule,
    BrowserModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
