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

  public handleKey(event: any) {
    console.log(event);
  }

}
