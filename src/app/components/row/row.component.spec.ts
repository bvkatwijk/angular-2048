/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RowComponent } from './row.component';
import { TileComponent } from "../tile/tile.component";

describe('RowComponent', () => {
  let component: RowComponent;
  let fixture: ComponentFixture<RowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RowComponent,
        TileComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowComponent);
    component = fixture.componentInstance;
    component.values = [0, 1, 2, 3];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have four tile elements', () => {
    expect(fixture.debugElement.queryAll(By.css('app-tile')).length).toEqual(4);
  });
  
});
