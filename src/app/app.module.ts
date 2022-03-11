import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import {MatListModule} from "@angular/material/list";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import 'bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from "@angular/material/dialog";
import { CardCreateComponent } from './card-create/card-create.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardCreateComponent,
    CardDetailsComponent,
    CardListComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
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
