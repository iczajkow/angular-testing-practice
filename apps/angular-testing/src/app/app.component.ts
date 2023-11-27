import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonApiService } from './api/pokemon-api.service';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'angular-testing-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-testing';

  constructor(private readonly pokemonApiService: PokemonApiService) {}

  ngOnInit() {
    this.pokemonApiService.getList(10, 0).subscribe((response) => {
      console.log(response);
    });
  }
}
