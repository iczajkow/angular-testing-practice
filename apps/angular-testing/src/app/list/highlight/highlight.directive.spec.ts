import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

  it('should add color style on mouse enter', () => {
    fixture.debugElement
      .query(By.directive(HighlightDirective))
      .triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').style.backgroundColor).toBe(
      'yellow'
    );
  });
});
