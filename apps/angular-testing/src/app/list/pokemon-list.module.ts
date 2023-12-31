import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterModule } from '@angular/router';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { PokemonListPageComponent } from './pokemon-list-page.component';
import { SomeDumbService } from './some-dumb-service';

@NgModule({
  declarations: [
    PokemonListComponent,
    NavigationButtonComponent,
    HighlightDirective,
    PokemonListPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PokemonListPageComponent,
      },
    ]),
  ],
  providers: [SomeDumbService],
  exports: [PokemonListPageComponent],
})
export class PokemonListModule {}
