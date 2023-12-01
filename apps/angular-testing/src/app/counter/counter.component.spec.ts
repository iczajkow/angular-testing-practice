import { CounterComponent } from './counter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import counter from '@nx/workspace/src/executors/counter/counter.impl';
import { DebugElement } from '@angular/core';

describe('CounterComponent', () => {
  describe('Component class test without TestBed', () => {
    let component: CounterComponent;
    beforeEach(() => {
      component = new CounterComponent();
    });

    it('should increment', () => {
      component.value = 0;
      component.increment();
      expect(component.value).toBe(1);
    });

    it('should decrement', () => {
      component.value = 1;
      component.decrement();
      expect(component.value).toBe(0);
    });

    it('should have initial value', () => {
      expect(component.value).toBe(0);
    });

    it('should not decrement if value is 0', () => {
      component.value = 0;
      component.decrement();
      expect(component.value).not.toBeLessThan(0);
    });
  });

  describe('Component DOM test with TestBed', () => {
    let fixture: ComponentFixture<CounterComponent>;
    let component: CounterComponent;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [CounterComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(CounterComponent);
      component = fixture.componentInstance;
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should render counter property', () => {
      component.value = 55;
      fixture.detectChanges();

      const counterElement: DebugElement = fixture.debugElement.query(
        By.css('[data-testid="value"]')
      );
      const counterNativeElement =
        counterElement.nativeElement as HTMLDivElement;

      expect(counterNativeElement.textContent).toBe('55');
    });

    it('should increment', () => {
      component.value = 55;

      const incrementButton: DebugElement = fixture.debugElement.query(
        By.css('[data-testid="increment"]')
      );

      const incrementButtonNativeElement =
        incrementButton.nativeElement as HTMLButtonElement;

      incrementButtonNativeElement.click();
      fixture.detectChanges();

      const counterElement: DebugElement = fixture.debugElement.query(
        By.css('[data-testid="value"]')
      );

      const counterNativeElement =
        counterElement.nativeElement as HTMLDivElement;

      expect(counterNativeElement.textContent).toBe('56');
    });
  });
});
