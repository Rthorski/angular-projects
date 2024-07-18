import { Component, OnInit, inject } from '@angular/core';
import { CocktailService } from '../services/cocktail.service';
import { Cocktail } from '../models/cocktail.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktaillist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktaillist.component.html',
  styleUrl: './cocktaillist.component.scss',
})
export class CocktaillistComponent implements OnInit {
  cocktails: Cocktail[] = [];
  public cocktailService = inject(CocktailService);

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe((cocktailsJson) => {
      this.cocktails = cocktailsJson;
    });
  }
}
