import { CounterComponent } from './counter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CounterComponent', () => {
  describe('Component class test without TestBed', () => {
    let component: CounterComponent;

    it('should increment', () => {
      component = new CounterComponent();
      component.value = 0;
      component.increment();
      expect(component.value).toBe(1);
    });

    it('should decrement', () => {
      component = new CounterComponent();
      component.value = 1;
      component.increment();
      expect(component.value).toBe(2);
    });

    it('should not decrement if value is 0', () => {
      component = new CounterComponent();
      component.value = 0;
      component.decrement();
      expect(component.value).toBe(0);
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

    it('should render counter property', () => {
      component.value = 42;
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(
        compiled.querySelector('[data-testid="value"]').textContent
      ).toContain('42');
    });

    it('should increment', () => {
      component.value = 0;
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      compiled.querySelector('[data-testid="increment"]').click();
      fixture.detectChanges();
      expect(
        compiled.querySelector('[data-testid="value"]').textContent
      ).toContain('1');
    });
  });
});
