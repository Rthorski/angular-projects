import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CocktaillistComponent } from './cocktaillist/cocktaillist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CocktaillistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
