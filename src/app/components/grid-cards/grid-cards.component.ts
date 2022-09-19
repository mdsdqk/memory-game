import { Component, Input, OnInit } from '@angular/core';
import { Card, State } from 'src/app/interfaces/card';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css']
})
export class GridCardsComponent implements OnInit {

  gridTemplate: string = "";
  @Input() rows: number = 0;
  @Input() cols: number = 0;
  numberMap: Array<number> = Array();
  cards: Array<Card> = Array();
  totalCards: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalCards = this.rows * this.cols;
    //init empty map
    this.numberMap = Array(this.totalCards/2).fill(0);

    this.setGridStyle();
    this.generateCards();
  }

  setGridStyle(): void {
    this.gridTemplate = `repeat(1fr, ${this.rows}) / repeat(1fr, ${this.cols})`;
  }

  generateCards(): void {
    this.cards = Array.from(Array(this.totalCards), () => {      
      return {
        content: this.getUniqueRandomInt(1, this.totalCards/2),
        state: State.DEFAULT
      }
    });
  }

  getUniqueRandomInt(min: number, max: number): number {
    let num = Math.floor(Math.random() * (max - min + 1) + min);     
    if(this.numberMap[num - 1] < 2) {
      this.numberMap[num - 1]++;
      return num;
    }
    else return this.getUniqueRandomInt(min, max);
  }

}
