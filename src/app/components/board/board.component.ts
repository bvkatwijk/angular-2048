import { Component, OnInit } from '@angular/core';
import { RowComponent } from "app/components/row/row.component";
import { Merge } from "app/components/merge/merge";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  host: {
    '(document:keyup)': 'handleKey($event.key)'
  }
})
export class BoardComponent {
  grid: number[][] = [
    [0, 0, 0, 2],
    [0, 0, 0, 2],
    [0, 0, 0, 2],
    [0, 0, 0, 2],
    ];

  public handleKey(key: string) {
    switch (key) {
      case "w": this.up(); break;
      case "a": this.left(); break;
      case "s": this.down(); break;
      case "d": this.right(); break;
      default: break;
    }
  }

  private up() {
    console.log("Firing UP event");
  }

  private left() {
    for(var i = 0; i < this.grid.length; i++) {
      this.grid[i] = Merge.left(this.grid[i]);
    }
  }

  private down() {
    console.log("Firing DOWN event");
  }

  private right() {
    for(var i = 0; i < this.grid.length; i++) {
      this.grid[i] = Merge.right(this.grid[i]);
    }
  }

}
