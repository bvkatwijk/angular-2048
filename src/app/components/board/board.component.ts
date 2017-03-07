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
export class BoardComponent implements OnInit {
  grid: number[][] = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  ngOnInit(): void {
    this.addNumber();
  }

  public handleKey(key: string) {
    var previous = this.grid.concat();
    switch (key) {
      case "w": this.up(); break;
      case "a": this.left(); break;
      case "s": this.down(); break;
      case "d": this.right(); break;
      default: break;
    }
    if(!this.equal(this.grid, previous)) {
      this.addNumber();
    }
  }

  private equal(a: number[][], b: number[][]) {
    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < a.length; j++) {
        if(a[i][j] != b[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  private up() {
    console.log("Firing UP event");
  }

  private left() {
      this.grid = Merge.leftGrid(this.grid);
  }

  private down() {
    console.log("Firing DOWN event");
  }

  private right() {
      this.grid = Merge.rightGrid(this.grid);
  }

  private addNumber() {
    var nulls: [number, number][] = [];
    for (var i = 0; i < this.grid.length; i++) {
      for (var j = 0; j < this.grid[0].length; j++) {
        if(this.grid[i][j]==0) {
          nulls.push([i, j]);
        }
      }
    }
    if(nulls.length == 0) {
      console.log('Game over!');
      return;
    }
    var tile = nulls[this.random(nulls.length)];
    this.grid[tile[0]][tile[1]] = 2;
  }

  /**
   * Generate random integer [0, bound)
   */
  private random(bound: number) {
    return Math.floor(Math.random() * bound);
  }

}
