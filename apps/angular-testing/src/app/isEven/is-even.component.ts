import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IsEvenPipe } from './is-even.pipe';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'angular-testing-is-even',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IsEvenPipe],
  templateUrl: './is-even.component.html',
  styleUrl: './is-even.component.scss',
})
export class IsEvenComponent {
  formControl = new FormControl();

  @Output() debounceChange = this.formControl.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged()
  );
}
