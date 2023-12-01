import { IsEvenPipe } from './is-even.pipe';
import { isEven } from './is-even';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('IsEvenPipe', () => {
  describe('Test without host', () => {
    it('should return odd', () => {
      let isEvenPipe = new IsEvenPipe();
      const odd = 1;
      const result = isEvenPipe.transform(odd);
      expect(result).toBe('odd');
    });
  });

  describe('Test with host', () => {
    @Component({
      template: `{{ value | isEven }}`,
      standalone: true,
      imports: [IsEvenPipe],
    })
    class HostTestComponent {
      value: number = 1;
    }

    let fixture: ComponentFixture<HostTestComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [HostTestComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(HostTestComponent);
    });

    it('should return odd', () => {
      fixture.componentInstance.value = 1;
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.textContent).toBe('odd');
    });

    it('should return even', () => {
      fixture.componentInstance.value = 2;
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.textContent).toBe('even');
    });
  });
});
