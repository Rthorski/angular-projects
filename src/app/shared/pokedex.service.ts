import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from './pokemon';
import { POKEMONS } from './pokemon-mock';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor() {}
  getPokemons(): Observable<Pokemon[]> {
    return of(POKEMONS);
  }
}
