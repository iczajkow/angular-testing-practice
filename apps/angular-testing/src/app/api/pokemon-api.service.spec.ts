import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { PokemonApiService } from './pokemon-api.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('PokemonApiService', () => {
  describe('with HttpTestingController', () => {
    let service: PokemonApiService;
    let testingController: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [PokemonApiService],
        imports: [HttpClientTestingModule],
      });
      service = TestBed.inject(PokemonApiService);
      testingController = TestBed.inject(HttpTestingController);
    });

    it('should call https://pokeapi.co/api/v2/pokemon with limit and offset', () => {
      const limit = 10;
      const offset = 2;
      service.getList(limit, offset).subscribe();
      testingController.expectOne({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
      });
      testingController.verify();
    });

    it('should fail', fakeAsync((done: jest.DoneCallback) => {
      setTimeout(() => {
        expect(true).toBe(false);
        done();
      }, 100000000);
      tick(100000000);
    }));

    it('should fail', (done) => {
      setTimeout(() => {
        expect(true).toBe(false);
        done();
      }, 0);
    });

    it('should fail 2 ', waitForAsync(() => {
      setTimeout(() => {
        expect(true).toBe(false);
      }, 0);
    }));

    it('should call https://pokeapi.co/api/v2/pokemon with pokemon name', () => {
      const nameOrId = 'pikachu';

      service.getOne(nameOrId).subscribe((response) => {
        expect(true).toBe(false);
        expect(response.name).toBe({ name: nameOrId, id: '23424532' });
      });
      const request = testingController.expectOne(
        `https://pokeapi.co/api/v2/pokemon/${nameOrId}`
      );
      request.flush({ name: nameOrId, id: '0' });
      testingController.verify();
    });
  });

  describe('without HttpTestingController', () => {
    let service: PokemonApiService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          PokemonApiService,
          {
            provide: HttpClient,
            useValue: {
              get: jest.fn().mockReturnValue(of({})),
            },
          },
        ],
      });
      service = TestBed.inject(PokemonApiService);
    });

    it('should create service', () => {
      expect(service).toBeTruthy();
    });

    it('should call https://pokeapi.co/api/v2/pokemon with limit and offset', () => {
      const httpClient = TestBed.inject(HttpClient);
      service.getList(10, 2);
      const params = new HttpParams({ fromObject: { limit: 10, offset: 2 } });
      expect(httpClient.get).toHaveBeenCalledWith(
        'https://pokeapi.co/api/v2/pokemon',
        { params }
      );
    });
  });
});
