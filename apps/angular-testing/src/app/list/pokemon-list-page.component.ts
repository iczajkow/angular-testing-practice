import { Component, inject, OnInit } from '@angular/core';
import { PokemonListPageService } from './pokemon-list-page.service';

@Component({
  selector: 'angular-testing-pokemon-list-page',
  providers: [PokemonListPageService],
  templateUrl: './pokemon-list-page.component.html',
  styleUrl: './pokemon-list-page.component.scss',
})
export class PokemonListPageComponent implements OnInit {
  private readonly pokemonListPageService = inject(PokemonListPageService);

  page$ = this.pokemonListPageService.page$;
  loading$ = this.pokemonListPageService.loading$;
  error$ = this.pokemonListPageService.error$;
  listResponse$ = this.pokemonListPageService.listResponse$;

  ngOnInit() {
    this.pokemonListPageService.fetchList();
  }

  prevPage() {
    this.pokemonListPageService.prevPage();
  }

  nextPage() {
    this.pokemonListPageService.nextPage();
  }
}
