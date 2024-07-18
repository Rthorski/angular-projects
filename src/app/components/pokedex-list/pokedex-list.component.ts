import { Component, Input } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';

@Component({
  selector: 'app-pokedex-list',
  standalone: true,
  imports: [],
  templateUrl: './pokedex-list.component.html',
  styleUrl: './pokedex-list.component.scss',
})
export class PokedexListComponent {
  @Input() pokemons: Pokemon[] | undefined;
}
