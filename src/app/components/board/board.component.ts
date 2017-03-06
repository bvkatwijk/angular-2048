import { Component, OnInit } from '@angular/core';
import { RowComponent } from "app/components/row/row.component";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  host: {
    '(document:keyup)': 'handleKey($event.key)'
  }
})
export class BoardComponent {
  rows: RowComponent[];

  constructor() {
    this.rows = [];
    for(var i = 0; i < 4; i++) {
      this.rows.push(this.createRow());
    }
  }

  private createRow() {
    return new RowComponent();
  }

  public handleKey(key: string) {
    switch (key) {
      case "w": this.up(); break;
      case "a": this.left(); break;
      case "s": this.down(); break;
      case "d": this.right(); break;
      default:
        break;
    }
  }

  private up() {
    console.log("Firing UP event");
  }

  private left() {
    console.log("Firing LEFT event");
  }

  private down() {
    console.log("Firing DOWN event");
  }

  private right() {
    console.log("Firing RIGHT event");
  }

}
