import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  numberAttribute,
  Output,
} from '@angular/core';
import { PokemonListItemResponse } from '../../api/models/pokemon-list-response';

@Component({
  selector: 'angular-testing-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent {
  @Input() pokemons: PokemonListItemResponse[] = [];
  @Input({ transform: numberAttribute }) allItemsCount = 0;
  @Input({ transform: numberAttribute }) currentPage = 1;
  @Input({ transform: booleanAttribute }) navigationButtonsDisabled = false;

  @Output() previousPageClick = new EventEmitter<void>();
  @Output() nextPageClick = new EventEmitter<void>();
}
