import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'Raclette Party 🧀';

  isAdmin: boolean = true;

  changeIsAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }
}
