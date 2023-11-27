import { NavigationButtonComponent } from './navigation-button.component';
import {
  byTestId,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator/jest';

describe('Test with spectator', () => {
  let spectator: Spectator<NavigationButtonComponent>;
  const createComponent = createComponentFactory(NavigationButtonComponent);

  beforeEach(async () => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.query(byTestId('button'))).toBeTruthy();
  });
});
