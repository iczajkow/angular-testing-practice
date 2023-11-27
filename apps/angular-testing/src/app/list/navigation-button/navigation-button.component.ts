import {
  booleanAttribute,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { SomeDumbService } from '../some-dumb-service';

@Component({
  selector: 'angular-testing-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss',
})
export class NavigationButtonComponent {
  @Input() content = '';
  @Input({ transform: booleanAttribute }) disabled = false;

  @Output() buttonClick = new EventEmitter<void>();

  private readonly someDumbService = inject(SomeDumbService);
}
