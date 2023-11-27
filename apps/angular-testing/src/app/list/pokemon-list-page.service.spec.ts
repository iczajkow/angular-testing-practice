import { TestBed } from '@angular/core/testing';

import { PokemonListPageService } from './pokemon-list-page.service';

describe('PokemonListPageService', () => {
  let service: PokemonListPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonListPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
