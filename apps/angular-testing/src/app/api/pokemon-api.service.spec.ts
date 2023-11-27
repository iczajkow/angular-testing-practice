import { TestBed } from '@angular/core/testing';
import { PokemonApiService } from './pokemon-api.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PokemonApiService', () => {
  describe('with HttpTestingController', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [PokemonApiService],
        imports: [HttpClientTestingModule],
      });
    });
  });

  describe('without HttpTestingController', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          PokemonApiService,
          {
            provide: HttpClient,
            useValue: {},
          },
        ],
      });
    });
  });
});
