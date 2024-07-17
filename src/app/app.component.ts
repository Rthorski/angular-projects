import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DeveloperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
