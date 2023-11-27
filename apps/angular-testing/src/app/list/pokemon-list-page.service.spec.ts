import { fakeAsync, TestBed } from '@angular/core/testing';

import { PokemonListPageService } from './pokemon-list-page.service';

describe('PokemonListPageService', () => {
  let service: PokemonListPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [],
    });
    service = TestBed.inject(PokemonListPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set page', async () => {});

  it('should fetch list', fakeAsync(async () => {}));
});
