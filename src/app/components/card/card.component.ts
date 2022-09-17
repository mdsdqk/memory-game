import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  selected: boolean = false;
  content: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selectCard() {

  }

}