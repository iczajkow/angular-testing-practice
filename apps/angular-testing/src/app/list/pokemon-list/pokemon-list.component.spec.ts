import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { By } from '@angular/platform-browser';

describe('PokemonListComponent With Dependency', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent],
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
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(fixture.debugElement.nativeElement.innerHTML);
    expect(component).toBeTruthy();
  });

  it('should render 3 pokemon items', () => {});

  it('should emit event when click next', () => {});
});
