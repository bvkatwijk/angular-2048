import { Component } from '@angular/core';
import { BackgroundComponent } from './components/background/background.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  rows: number;
  heroes: string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() {
    this.rows = 4;
  }

}
