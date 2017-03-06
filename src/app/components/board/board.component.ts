import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
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

}
