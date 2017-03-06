import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  tiles: number

  constructor() {
    this.tiles = 4;
  }

  ngOnInit() {
  }

  tileArray() {
    return new Array(this.tiles);
  }

}
