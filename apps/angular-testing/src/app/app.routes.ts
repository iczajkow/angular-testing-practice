import { Route } from '@angular/router';

import { CounterComponent } from './counter/counter.component';
import { PokemonListModule } from './list/pokemon-list.module';
import { IsEvenComponent } from './isEven/is-even.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'list',
    loadChildren: () => PokemonListModule,
  },
  { path: 'counter', component: CounterComponent },
  {
    path: 'isEven',
    component: IsEvenComponent,
  },
];
