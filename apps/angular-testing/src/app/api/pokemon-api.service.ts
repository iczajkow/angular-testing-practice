import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonListResponse } from './models/pokemon-list-response';
import { PokemonDetailsResponse } from './models/pokemon-details-response';

const BASE_URL = 'https://pokeapi.co/api/v2/';

@Injectable({ providedIn: 'root' })
export class PokemonApiService {
  constructor(private readonly http: HttpClient) {}

  getList(limit: number, offset: number): Observable<PokemonListResponse> {
    const params = new HttpParams({ fromObject: { limit, offset } });
    return this.http.get<PokemonListResponse>(`${BASE_URL}pokemon`, {
      params,
    });
  }

  getOne(nameOrId: string): Observable<PokemonDetailsResponse> {
    return this.http.get<PokemonDetailsResponse>(
      `${BASE_URL}pokemon/${nameOrId}`
    );
  }
}
