import { Component, OnInit, Input } from '@angular/core';
import { TileComponent } from "app/components/tile/tile.component";
import { Merge } from "app/components/merge/merge";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})
export class RowComponent {
  @Input() values: number[];

  left() {
    console.log("Event Left firing on [" + this.values + "]");
    this.values = Merge.left(this.values);
    console.log("Event Left finished on " + this);
  }

}
