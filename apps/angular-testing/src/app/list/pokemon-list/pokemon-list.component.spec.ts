import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { By } from '@angular/platform-browser';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';
import { SomeDumbService } from '../some-dumb-service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  byTestId,
  createComponentFactory,
  Spectator,
} from '@ngneat/spectator/jest';

describe('PokemonListComponent With Dependency with spectator', () => {
  const createComponent = createComponentFactory({
    component: PokemonListComponent,
    shallow: true,
  });
  let spectator: Spectator<PokemonListComponent>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    console.log(spectator.debugElement.nativeElement.innerHTML);
    expect(spectator.component).toBeTruthy();
  });
});

describe('PokemonListComponent With Dependency', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent, NavigationButtonComponent],
      imports: [],
      providers: [SomeDumbService],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(fixture.debugElement.nativeElement.innerHTML);
    expect(component).toBeTruthy();
  });
});

describe('PokemonListComponent Without Dependency', () => {
  const createComponent = createComponentFactory({
    component: PokemonListComponent,
    shallow: true,
  });
  let spectator: Spectator<PokemonListComponent>;

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render 3 pokemon items', () => {
    spectator.setInput('pokemons', [
      { name: '1', url: '1' },
      { name: '2', url: '2' },
      { name: '3', url: '3' },
    ]);
    const liElements = spectator.queryAll(
      byTestId('pokemon-list-item')
    ) as HTMLElement[];

    const pokemonNames = liElements.map((li) => li.textContent?.trim());

    expect(liElements).toHaveLength(3);
    expect(pokemonNames).toEqual(['1', '2', '3']);
  });

  it('should emit event when click next', () => {
    const spyNexPageClick = jest.fn();
    spectator.output('nextPageClick').subscribe(() => spyNexPageClick());
    spectator.dispatchFakeEvent(byTestId('next-button'), 'buttonClick');

    expect(spyNexPageClick).toHaveBeenCalled();
  });
});
