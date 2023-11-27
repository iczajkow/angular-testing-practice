import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SomeDumbService } from '../some-dumb-service';

describe('PokemonListComponent With Dependency', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent, NavigationButtonComponent],
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
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(fixture.debugElement.nativeElement.innerHTML);
    expect(component).toBeTruthy();
  });

  it('should render 3 pokemon items', () => {
    component.pokemons = [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      },
      {
        name: 'venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
      },
    ];
    fixture.detectChanges();
    expect(
      fixture.debugElement.queryAll(By.css('[data-testid="pokemon-list-item"]'))
        .length
    ).toEqual(3);
  });

  it('should emit event when click next', () => {
    const subscription = jest.fn();
    component.nextPageClick.subscribe(subscription);
    fixture.debugElement
      .query(By.css('[data-testid="next-button"]'))
      .triggerEventHandler('buttonClick', null);
    expect(subscription).toHaveBeenCalled();
  });
});
