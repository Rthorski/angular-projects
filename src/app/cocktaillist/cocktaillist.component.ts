import { Component, inject } from '@angular/core';
import { CocktailService } from '../services/cocktail.service';

@Component({
  selector: 'app-cocktaillist',
  standalone: true,
  imports: [],
  templateUrl: './cocktaillist.component.html',
  styleUrl: './cocktaillist.component.scss',
})
export class CocktaillistComponent {
  public cocktails = inject(CocktailService);
  isShow = false;
  cocktailsList = this.cocktails.getCocktails();

  onClick(): void {
    this.isShow = !this.isShow;
  }
}
