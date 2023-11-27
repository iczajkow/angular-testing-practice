import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-testing-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss',
})
export class NavigationButtonComponent {
  @Input() content = '';
  @Input({ transform: booleanAttribute }) disabled = false;

  @Output() buttonClick = new EventEmitter<void>();
}
