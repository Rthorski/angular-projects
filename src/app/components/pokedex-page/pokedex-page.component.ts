import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../shared/pokedex.service';
import { Pokemon } from '../../shared/pokemon';
import { PokedexListComponent } from '../pokedex-list/pokedex-list.component';

@Component({
  selector: 'app-pokedex-page',
  standalone: true,
  imports: [PokedexListComponent],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.scss',
})
export class PokedexPageComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(private pokemonsService: PokedexService) {}

  ngOnInit(): void {
    this.pokemonsService.getPokemons().subscribe((pokemonsMock) => {
      this.pokemons = pokemonsMock;
    });
  }
}
