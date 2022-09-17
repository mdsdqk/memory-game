import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css']
})
export class GridCardsComponent implements OnInit {

  gridTemplate: string = "";
  @Input() rows: number = 0;
  @Input() cols: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.gridTemplate = `repeat(1fr, ${this.rows}) / repeat(1fr, ${this.cols})`;
  }

}
