import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Card, State } from 'src/app/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('flip', [
      state('Default', style({
        transform: "none"
      })),
      state('Visible', style({
        transform: "perspective(600px) rotateY(180deg)"
      })),
      state('Removed', style({
        opacity: 0,
        transform: "scale(0.1)"      
      })),
      transition("Default <-> Visible", [
        animate("400ms")
      ]),
      transition("* -> Removed", [
        animate("500ms")
      ])
    ])
  ]
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
