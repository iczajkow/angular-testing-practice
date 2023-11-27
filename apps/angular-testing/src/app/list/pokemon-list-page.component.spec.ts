import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListPageComponent } from './pokemon-list-page.component';
import { Subject } from 'rxjs';
import { PokemonListPageService } from './pokemon-list-page.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PokemonListPageComponent', () => {
  let component: PokemonListPageComponent;
  let fixture: ComponentFixture<PokemonListPageComponent>;

  const mockPokemonListPageService = () => ({
    page$: new Subject(),
    loading$: new Subject(),
    error$: new Subject(),
    listResponse$: new Subject(),
    fetchList: jest.fn(),
    prevPage: jest.fn(),
    nextPage: jest.fn(),
  });

  let pokemonListPageService: ReturnType<typeof mockPokemonListPageService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .overrideComponent(PokemonListPageComponent, {
        set: {
          providers: [
            {
              provide: PokemonListPageService,
              useFactory: mockPokemonListPageService,
            },
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(PokemonListPageComponent);
    component = fixture.componentInstance;
    pokemonListPageService = fixture.debugElement.injector.get(
      PokemonListPageService
    ) as unknown as ReturnType<typeof mockPokemonListPageService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading', () => {
    pokemonListPageService.loading$.next(true);
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('[data-testid="loading-spinner"]')
    ).toBeTruthy();
  });

  it('should hide loading', () => {
    pokemonListPageService.loading$.next(false);
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('[data-testid="loading-spinner"]')
    ).toBeFalsy();
  });

  it('should set pokemon list', () => {
    pokemonListPageService.listResponse$.next({
      count: 1,
      next: '',
      previous: '',
      results: [{ name: 'test', url: 'test' }],
    });
    fixture.detectChanges();
    const pokemonList = fixture.nativeElement.querySelector(
      '[data-testid="pokemon-list"]'
    );
    expect(pokemonList.pokemons).toEqual([{ name: 'test', url: 'test' }]);
  });
});
