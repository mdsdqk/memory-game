import { Component, Input, OnInit } from '@angular/core';
import { Card, State } from 'src/app/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardData!: Card;
  imgSrc!: String;
  imgAlt!: String;
  constructor() { }

  ngOnInit(): void {
    this.imgSrc = `https://picsum.photos/seed/${this.cardData.content}/150`;
    this.imgAlt = `Image number ${this.cardData.content}`;
  }

  isStateDefault = () => this.isState(State.DEFAULT);
  isStateVisible = () => this.isState(State.VISIBLE);
  isStateRemoved = () => this.isState(State.REMOVED);

  isState(state: State): boolean {
    return this.cardData.state === state;
  }
}
