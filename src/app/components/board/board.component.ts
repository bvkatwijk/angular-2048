import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  host: {
    '(document:keydown)': 'handleKey($event.key)'
  }
})
export class BoardComponent implements OnInit {
  rows: number;

  constructor() {
    this.rows = 4;
  }

  ngOnInit() {
  }

  rowArray() {
    return new Array(this.rows);
  }

  handleKey(event: any) {
    console.log(event);
  }

}
