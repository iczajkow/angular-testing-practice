import { inject, Injectable } from '@angular/core';
import { PokemonApiService } from '../api/pokemon-api.service';
import { PokemonListResponse } from '../api/models/pokemon-list-response';
import { BehaviorSubject, delay, map } from 'rxjs';

interface PokemonListPageState {
  page: number;
  loading: boolean;
  error: boolean;
  listResponse: PokemonListResponse | null;
}

const initialState: PokemonListPageState = {
  page: 0,
  loading: false,
  error: false,
  listResponse: null,
};

@Injectable()
export class PokemonListPageService {
  private readonly pokemonApiService = inject(PokemonApiService);

  private readonly state$ = new BehaviorSubject<PokemonListPageState>(
    initialState
  );

  readonly page$ = this.state$.pipe(map((state) => state.page + 1));
  readonly loading$ = this.state$.pipe(map((state) => state.loading));
  readonly error$ = this.state$.pipe(map((state) => state.error));
  readonly listResponse$ = this.state$.pipe(map((state) => state.listResponse));

  setState(newState: Partial<PokemonListPageState>) {
    this.state$.next({
      ...this.state$.value,
      ...newState,
    });
  }

  nextPage() {
    if (!this.state$.value.listResponse?.next) {
      return;
    }
    this.setState({ page: this.state$.value.page + 1 });
    this.fetchList();
  }

  prevPage() {
    if (!this.state$.value.listResponse?.previous) {
      return;
    }
    this.setState({ page: this.state$.value.page - 1 });
    this.fetchList();
  }

  fetchList(delayTime = 0) {
    const { page } = this.state$.value;
    const limit = 20;
    const offset = page * limit;
    this.setState({ loading: true, error: false });
    this.pokemonApiService
      .getList(limit, offset)
      .pipe(delay(delayTime))
      .subscribe({
        next: (listResponse) => {
          this.setState({ listResponse, loading: false });
        },
        error: () => {
          this.setState({ error: true, loading: false });
        },
      });
  }
}
