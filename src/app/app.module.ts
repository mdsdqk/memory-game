import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { GridCardsComponent } from './components/grid-cards/grid-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GridCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
