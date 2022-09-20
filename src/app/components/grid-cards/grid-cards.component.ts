import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Card, State } from 'src/app/interfaces/card';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css']
})
export class GridCardsComponent implements OnInit, DoCheck {

  gridTemplate!: string;
  @Input() rows: number = 0;
  @Input() cols: number = 0;
  numberMap: Array<number> = Array();
  cards: Array<Card> = Array();
  selectedCards: Array<Card> = Array();
  totalCards: number = 0;

  constructor() { }

  ngDoCheck(): void {
    if(this.selectedCards.length === 2) {
      setTimeout(() => {
        if(this.selectedCards[0].content === this.selectedCards[1].content)
          this.selectedCards[0].state = this.selectedCards[1].state = State.REMOVED;
        
        else
          this.selectedCards[0].state = this.selectedCards[1].state = State.DEFAULT;
        
        this.selectedCards = Array();
      }, 2500);
      
    }
  }

  ngOnInit(): void {
    this.totalCards = this.rows * this.cols;
    //init empty map
    this.numberMap = Array(this.totalCards/2).fill(0);

    this.setGridStyle();
    this.generateCards();
  }

  setGridStyle(): void {
    this.gridTemplate = `repeat(${this.rows}, minmax(0, 1fr)) / repeat(${this.cols}, minmax(0, 1fr))`;
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

  selectCard(index: number) {
    if(this.selectedCards.length >= 2) return;

    
    if(this.cards[index].state === State.VISIBLE) {
      this.cards[index].state = State.DEFAULT;
      this.selectedCards.pop();
    }
    
    this.cards[index].state = State.VISIBLE;
    this.selectedCards.push(this.cards[index]);
    

    console.log(this.selectedCards);
  }

}
