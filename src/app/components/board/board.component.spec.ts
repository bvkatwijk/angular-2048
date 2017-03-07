/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoardComponent } from './board.component';
import { RowComponent } from '../row/row.component'
import { TileComponent } from '../tile/tile.component'

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoardComponent,
        RowComponent,
        TileComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have four row elements', () => {
    expect(fixture.debugElement.queryAll(By.css('app-row')).length).toEqual(4);
  });

  describe('Key Detection', () => {

    it('should detect W key presses', () => {
      spyOn(component, 'handleKey');
      document.dispatchEvent(createEvent("w"));
      expect(component.handleKey).toHaveBeenCalled();
    });

    it('should detect A key presses', () => {
      spyOn(component, 'handleKey');
      document.dispatchEvent(createEvent("a"));
      expect(component.handleKey).toHaveBeenCalled();
    });

    it('should detect S key presses', () => {
      spyOn(component, 'handleKey');
      document.dispatchEvent(createEvent("s"));
      expect(component.handleKey).toHaveBeenCalled();
    });

    it('should detect D key presses', () => {
      spyOn(component, 'handleKey');
      document.dispatchEvent(createEvent("d"));
      expect(component.handleKey).toHaveBeenCalled();
    });

    it('should not detect other key presses', () => {
      spyOn(component, 'handleKey');
      document.dispatchEvent(createEvent("r"));
      expect(component.handleKey).toHaveBeenCalled();
    });

    function createEvent(key: string): KeyboardEvent {
      var event: KeyboardEvent = document.createEvent('KeyboardEvent');
      event.initKeyboardEvent("keyup", true, true, window, key, 0, "", false, "");
      return event;
    }

  });

});
