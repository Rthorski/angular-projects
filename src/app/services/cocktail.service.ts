import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {}

  mojito: Cocktail = { nom: 'Mojito', prix: 8, image: 'mojito.jpg' };
  pinaColada: Cocktail = {
    nom: 'Pina Colada',
    prix: 9,
    image: 'pina-colada.jpg',
  };
  margarita: Cocktail = { nom: 'Margarita', prix: 8, image: 'margarita.jpg' };

  getCocktails() {
    return [this.mojito, this.pinaColada, this.margarita];
  }
}
