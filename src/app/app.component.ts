import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NasaService } from './services/nasa.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  imgOfTheDay!: any;
  constructor(private nasaService: NasaService) {}

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe((img) => {
      this.imgOfTheDay = img;
      console.log(this.imgOfTheDay);
    });
  }
}
