/* tslint:disable:no-unused-variable */

import { By }              from '@angular/platform-browser';
import { TestBed, async, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component'
import { RowComponent } from './components/row/row.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BoardComponent,
        RowComponent,
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });
    TestBed.compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have a board', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(fixture.debugElement.query(By.css('app-board'))).toBeTruthy();
  });

});
