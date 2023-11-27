import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PokemonListPageService } from './pokemon-list-page.service';
import { PokemonApiService } from '../api/pokemon-api.service';
import { EMPTY, firstValueFrom, of } from 'rxjs';

describe('PokemonListPageService', () => {
  let service: PokemonListPageService;

  const mockPokemonApiService = () => ({
    getList: jest.fn().mockReturnValue(EMPTY),
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PokemonListPageService,
        {
          provide: PokemonApiService,
          useFactory: mockPokemonApiService,
        },
      ],
    });
    service = TestBed.inject(PokemonListPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set page', async () => {
    service.setState({ page: 1 });
    const page = await firstValueFrom(service.page$);
    expect(page).toBe(2);
  });

  it('should fetch list', fakeAsync(async () => {
    const pokemonApiService = TestBed.inject(PokemonApiService);
    pokemonApiService.getList = jest.fn().mockReturnValue(
      of({
        count: 0,
        next: '',
        previous: '',
        results: [
          {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
          },
        ],
      })
    );
    service.fetchList();
    tick();
    expect(pokemonApiService.getList).toHaveBeenCalledWith(20, 0);
    const list = await firstValueFrom(service.listResponse$);
    expect(list).toEqual({
      count: 0,
      next: '',
      previous: '',
      results: [
        {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
        },
      ],
    });
  }));
});
