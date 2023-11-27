import { CounterComponent } from './counter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CounterComponent', () => {
  describe('Component class test without TestBed', () => {
    let component: CounterComponent;

    it('should increment', () => {});

    it('should decrement', () => {});

    it('should not decrement if value is 0', () => {});
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

    it('should render counter property', () => {});

    it('should increment', () => {});
  });
});
