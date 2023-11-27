import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: ` <p angularTestingHighlight>Highlight me!</p> `,
})
class HostTestComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<HostTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, HostTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HostTestComponent);
  });

  it('should add color style on mouse enter', () => {});
});
