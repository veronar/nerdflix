/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HoverComponent } from './hover.component';

describe('HoverComponent', () => {
  let component: HoverComponent;
  let fixture: ComponentFixture<HoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
