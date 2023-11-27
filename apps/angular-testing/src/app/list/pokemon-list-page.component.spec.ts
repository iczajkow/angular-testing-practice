import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListPageComponent } from './pokemon-list-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PokemonListPageComponent', () => {
  let component: PokemonListPageComponent;
  let fixture: ComponentFixture<PokemonListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading', () => {});

  it('should hide loading', () => {});

  it('should set pokemon list', () => {});
});
