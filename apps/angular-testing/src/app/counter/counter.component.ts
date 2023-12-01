import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-testing-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  value = 0;

  increment() {
    this.value++;
  }
  decrement() {
    if (this.value > 0) {
      this.value--;
    }
  }
}
